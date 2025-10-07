import { Express } from "express";
import { topicRoutes } from "./topic.route"
import { songRoutes } from "./song.route";
import { dashboardRoutes } from "./dashboard.route";

const clientRoutes = (app: Express): void => {

  app.use("/", dashboardRoutes);
  
  app.use("/topics", topicRoutes);

  app.use("/songs", songRoutes);

}

export default clientRoutes;