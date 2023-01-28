import joi from "joi";
import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol.js";

export const curiositySchema = joi.object<CuriositiesInsert>({
  author: joi.string().min(3).required(),
  title: joi.string().min(4).required(),
  description: joi.string().min(15).required(),
  classificationId: joi.number().min(1).required(),
});

export const curiositiesUpdateSchema = joi.object<CuriositiesUpdate>({
  title: joi.string().min(4).required(),
  description: joi.string().min(15).required(),
});
