import { Router } from "express";
import { getFunnySummary } from "../utils/getSummary";

const router = Router();

router.post("/", async (req, res) => {
  const results = req.body.results;
  if (!Array.isArray(results)) {
    res.status(400).json({ error: "Results must be an array" });
    return;
  }

  try {
    const summary = await getFunnySummary(results);
    res.json({ summary });
  } catch (err) {
    console.error("Error generating summary:", err);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

export default router;
