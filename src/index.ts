import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import playersRouter from "./routes/players";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use("/players", playersRouter);
const port = process.env.PORT || 3000;

// app.use(cors({ origin: "https://foosball.life" })); ////for prod
app.use(cors()); ////for dev

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
