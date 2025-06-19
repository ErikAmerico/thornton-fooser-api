import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import playersRouter from "./routes/players";
import matchesRouter from "./routes/matches";
dotenv.config();

const app = express();

// app.use(cors({ origin: "https://foosball.life" })); ////for prod?
app.use(cors()); ////for dev
app.use(express.json());
app.use(helmet());

const port = process.env.PORT || 3000;

app.use("/players", playersRouter);
app.use("/matches", matchesRouter);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
