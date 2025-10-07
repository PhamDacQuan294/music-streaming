import { Request, Response } from "express";

// [GET] /
export const index = async (req: Request, res: Response) => {
  res.render("client/pages/dashboard/index", {
    pageTitle: "dashboard"
  })
}