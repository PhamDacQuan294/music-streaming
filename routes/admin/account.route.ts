import { Router } from "express";
const router: Router = Router();
import multer from "multer";

import * as controller from "../../controllers/admin/account.controller"

import * as uploadCloud from "../../middlewares/admin/uploadCloud.middleware";

const upload = multer();

router.get("/", controller.index);

router.get("/create", controller.create);

router.post(
  "/create", 
  upload.single("avatar"),
  uploadCloud.uploadSingle,
  controller.createPost
);

router.get("/edit/:id", controller.edit);

router.patch(
  "/edit/:id", 
  upload.single("avatar"),
  uploadCloud.uploadSingle,
  controller.editPatch
);

export const accountRoutes: Router = router;