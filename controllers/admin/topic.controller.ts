import { Request, Response } from "express";
import Topic from "../../models/topic.model";
import { filterStatus } from "../../helpers/filterStatus";

// [GET] /admin/topics
export const index = async (req: Request, res: Response) => {
  const statusFilters = filterStatus(req.query);

  let find = {
    deleted: false
  }

  if (req.query.status) {
    find["status"] = req.query.status;
  }

  const topics = await Topic.find(find);

  res.render("admin/pages/topics/index", {
    pageTitle: "Quản lý chủ đề",
    topics: topics,
    filterStatus: statusFilters,
  });
}