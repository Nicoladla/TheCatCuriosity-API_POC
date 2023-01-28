import joi from "joi";
import { ClassificationInsert } from "../protocols/ClassificationProtocol.js";

const classificationSchema = joi.object<ClassificationInsert>({
  name: joi.string().min(3).max(20).required(),
});

export default classificationSchema;
