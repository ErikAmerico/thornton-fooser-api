import { Router, Request, Response } from "express";
import prisma from "../prisma";
import { adminOnly } from "../middleware/adminOnly";

const router = Router();

router.post("/update", adminOnly, async (req: Request, res: Response) => {
  const { finalScores } = req.body as {
    finalScores?: Record<string, number>;
  };

  if (
    !finalScores ||
    typeof finalScores !== "object" ||
    Array.isArray(finalScores)
  ) {
    res.status(400).json({ error: "finalScores must be an object" });
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

    res.json({ message: "Player scores updated successfully" });
  } catch (err: any) {
    console.error("Error updating scores:", err);
    res
      .status(500)
      .json({ error: "Failed to update scores", details: err.message });
  }
});

export default router;
