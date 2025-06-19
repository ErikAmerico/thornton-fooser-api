import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

const SECRET_CODE = process.env.SECRET_CODE!;
if (!SECRET_CODE) {
  throw new Error("Missing SECRET_CODE in env");
}

export async function adminOnly(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // read access code from header
  const code = req.header("x-admin-code");
  if (!code) {
    res.status(401).send({ error: "Missing admin code" });
    return;
  }

  // compare to the bcrypt hash
  const ok = await bcrypt.compare(code, SECRET_CODE);
  if (!ok) {
    res.status(403).send({ error: "Invalid admin code" });
    return;
  }

  return next();
}
