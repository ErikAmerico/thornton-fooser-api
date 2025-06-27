import { Router, Request, Response, NextFunction } from "express";
import Pusher from "pusher";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

const PUSHER_APP_ID = process.env.PUSHER_APP_ID!;
const PUSHER_KEY = process.env.PUSHER_KEY!;
const PUSHER_SECRET = process.env.PUSHER_SECRET!;
const PUSHER_CLUSTER = process.env.PUSHER_CLUSTER!;
const JWT_SECRET = process.env.JWT_SECRET!;

const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
  useTLS: true,
});

router.get("/history", verifyToken, async (req, res) => {
  const history = await prisma.chatMessage.findMany({
    orderBy: { createdAt: "asc" },
    take: 1000,
    include: {
      user: { select: { name: true } },
    },
  });

  const payload = history.map((m) => ({
    userId: m.userId,
    name: m.user.name,
    text: m.text,
    ts: m.createdAt.getTime(),
  }));

  res.json(payload);
});

router.post("/login", async (req, res) => {
  const { code } = req.body as { code: string };

  const player = await prisma.player.findUnique({
    where: { loginCode: code },
  });

  if (!player) {
    res.status(401).json({ error: "Invalid login code" });
    return;
  }

  const token = jwt.sign({ userId: player.id, name: player.name }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token, userId: player.id, name: player.name });
});

interface AuthPayload extends JwtPayload {
  userId: string;
  name: string;
}

declare module "express-serve-static-core" {
  interface Request {
    auth?: AuthPayload;
  }
}

function verifyToken(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing token" });
    return;
  }

  const token = authHeader.slice(7); // drop "Bearer "
  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;
    req.auth = payload;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
}

router.post("/pusher/auth", verifyToken, (req, res) => {
  const socketId = req.body.socket_id as string;
  const channelName = req.body.channel_name as string;
  const { userId, name } = req.auth!;

  const authResponse = pusher.authorizeChannel(socketId, channelName, {
    user_id: userId,
    user_info: { name },
  });
  res.send(authResponse);
});

router.post("/message", verifyToken, async (req, res) => {
  const { text } = req.body as { text: string };
  const { userId, name } = req.auth!;

  pusher.trigger("presence-chat", "message", {
    userId,
    name,
    text,
    ts: Date.now(),
  });

  const MESSAGE_CAP = 1000;
  await prisma.$transaction(async (prismaTX) => {
    // create new message
    await prismaTX.chatMessage.create({
      data: { userId, text },
    });

    // count total rows
    const total = await prismaTX.chatMessage.count();

    if (total > MESSAGE_CAP) {
      // find the cutoff timestamp (1001st newest)
      const cutoff = await prismaTX.chatMessage.findFirst({
        orderBy: { createdAt: "asc" },
        skip: total - MESSAGE_CAP,
        select: { createdAt: true },
      });

      if (cutoff) {
        await prismaTX.chatMessage.deleteMany({
          where: { createdAt: { lt: cutoff.createdAt } },
        });
      }
    }
  });

  res.sendStatus(204);
});

export default router;
