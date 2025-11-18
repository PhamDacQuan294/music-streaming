import { Request, Response, NextFunction } from "express";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).render("client/pages/errors/404", {
    pageTitle: "404 Not Found",
  });
};
