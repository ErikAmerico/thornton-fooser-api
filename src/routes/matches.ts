import { Router, Request, Response } from "express";
import prisma from "../prisma";
import { adminOnly } from "../middleware/adminOnly";

const router = Router();

interface UpdateBody {
  finalScores: Record<string, number>;
  teams: any[][];
  matchResults: Array<{ winner: any; loser: any }>;
}

router.post("/update", adminOnly, async (req: Request, res: Response) => {
  const { finalScores, matchResults, teams } = req.body as UpdateBody;

  if (
    !finalScores ||
    typeof finalScores !== "object" ||
    Array.isArray(finalScores)
  ) {
    res.status(400).json({ error: "finalScores must be an object" });
    return;
  }

  if (
    !Array.isArray(matchResults) ||
    !matchResults.every(
      (m) => m && typeof m === "object" && "winner" in m && "loser" in m
    )
  ) {
    res
      .status(400)
      .json({ error: "matchResults must be an array of { winner, loser }" });
    return;
  }

  if (
    !Array.isArray(teams) ||
    !teams.every((t) => Array.isArray(t) && t.length === 2)
  ) {
    res.status(400).json({ error: "teams must be an array of pairs" });
    return;
  }

  try {
    // Build one update-per-player, each incrementing their existing score
    const updates = Object.entries(finalScores).map(([playerId, delta]) =>
      prisma.player.update({
        where: { id: playerId },
        data: {
          score: {
            increment: delta,
          },
        },
      })
    );

    // Run all updates in a single transaction
    await prisma.$transaction(updates);

    await prisma.tournament.create({
      data: {
        teams: teams,
        results: matchResults,
      },
    });

    res.json({ message: "Tournament recorded and scores updated." });
  } catch (err: any) {
    console.error("Error updating scores:", err);
    res
      .status(500)
      .json({ error: "Failed to update scores", details: err.message });
  }
});

router.get("/history", async (_req, res) => {
  const history = await prisma.tournament.findMany({
    orderBy: { createdAt: "asc" },
    take: 20,
  });
  res.json(history);
});

export default router;
