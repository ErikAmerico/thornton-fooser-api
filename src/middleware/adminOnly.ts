import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

const ADMIN_HASH = process.env.ADMIN_HASH!;
if (!ADMIN_HASH) {
  throw new Error("Missing ADMIN_HASH in env");
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
  const ok = await bcrypt.compare(code, ADMIN_HASH);
  if (!ok) {
    res.status(403).send({ error: "Invalid admin code" });
    return;
  }

  return next();
}
