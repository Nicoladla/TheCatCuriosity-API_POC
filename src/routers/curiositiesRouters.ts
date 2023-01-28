import { Router } from "express";

import {
  getCuriosities,
  getCuriositiesByClassification,
  postCuriosity,
  updateCuriosity,
  deleteCuriosity,
} from "../controllers/curiositiesController.js";

import { validateIfCuriosityExists, validPostCuriosity, validUpdateCuriosity } from "../middleware/curiositiesMiddleware.js";

const router = Router();

router.get("/curiosities", getCuriosities);
router.get("/curiosities/:classificationId", getCuriositiesByClassification);
router.post("/curiosities",validPostCuriosity, postCuriosity);
router.patch("/curiosities/:id", validateIfCuriosityExists, validUpdateCuriosity, updateCuriosity);
router.delete("/curiosities/:id", validateIfCuriosityExists, deleteCuriosity);

export default router;
