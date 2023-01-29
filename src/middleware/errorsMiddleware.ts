import { Request, Response, NextFunction } from "express";

export function handleErrorsMiddleware(
  err,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err.type === "error_conflict") {
    res.status(409).send({ message: err.message });
    return;
  }

  if (err.type === "error_not_found") {
    res.status(404).send({ message: err.message });
    return;
  }

  res.status(500).send({ message: err.message });
}
