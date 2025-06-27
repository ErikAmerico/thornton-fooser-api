import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import playersRouter from "./routes/players";
import matchesRouter from "./routes/matches";
import chatRouter from "./routes/chat";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://foosball.life", "https://www.foosball.life"],
  })
); //// production
// app.use(cors()); //// dev
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const port = process.env.PORT || 3000; // prod?
// const port = parseInt(process.env.PORT ?? "3000", 10); //dev

app.use("/players", playersRouter);
app.use("/matches", matchesRouter);
app.use("/chat", chatRouter);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`); //prod?
});

// app.listen(port, "0.0.0.0", () => {
//   console.log(`🚀 Server running at http://0.0.0.0:${port}`); //dev?
// });
