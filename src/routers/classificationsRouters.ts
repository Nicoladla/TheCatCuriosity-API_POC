import { Router } from "express";

import {
  getClassifications,
  postClassifications,
} from "../controllers/classificationsController.js";

const router = Router();

router.get("/classifications", getClassifications);
router.post("/classifications", postClassifications);

export default router;
