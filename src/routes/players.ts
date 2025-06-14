// src/routes/players.ts
import { Request, Response, Router } from "express";
import prisma from "../prisma";

const router = Router();

// GET /players
router.get("/", async (_req, res) => {
  const players = await prisma.player.findMany();
  res.json(players);
});

router.post("/", async (req: Request, res: Response) => {
  // 1) Validate & pull out `name`
  const { name } = req.body as { name?: string };
  if (!name || typeof name !== "string") {
    res.status(400).send({ message: "Name is required." });
    return;
  }

  //Check for existing player
  const existingName = await prisma.player.findUnique({
    where: { name },
  });
  if (existingName) {
    res
      .status(409)
      .send({ message: "A player with that name already exists." });
    return;
  }

  // 3) Create
  const created = await prisma.player.create({
    data: { name },
  });

  res.status(201).send({
    message: `Created player: ${created.name}, ${created.id}, ${created.score}`,
  });
  return;
});

///players/id
router.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, score } = req.body as {
    name?: unknown;
    score?: unknown;
  };

  //Validate inputs
  if (!name || typeof name !== "string") {
    res.status(400).send({ message: "Name is required and must be a string." });
    return;
  }
  if (score === undefined || score === null) {
    res.status(400).send({ message: "Score is required." });
    return;
  }

  //can't rename to someone else's name
  const nameAlreadyExists = await prisma.player.findUnique({ where: { name } });
  if (nameAlreadyExists && nameAlreadyExists.id !== id) {
    res
      .status(409)
      .send({ message: `Another player already uses the name "${name}".` });
    return;
  }

  //update
  try {
    const updated = await prisma.player.update({
      where: { id },
      data: { name, score },
    });
    res.send({ message: "Player updated.", player: updated });
    return;
  } catch (err: any) {
    console.error("PUT /players/:id error:", err);
    res.status(500).send({ message: "Unexpected server error." });
    return;
  }
});

// DELETE /players/id
router.delete("/:id", async (req, res) => {
  await prisma.player.delete({ where: { id: req.params.id } });
  res.sendStatus(204);
});

export default router;
