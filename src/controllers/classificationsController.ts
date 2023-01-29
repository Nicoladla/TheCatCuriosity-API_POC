import { Request, Response } from "express";

import classificationSchema from "../schema/classificationsSchema.js";

import {
  checkIfClassificationExists,
  insertClassification,
  selectClassifications,
} from "../services/classificationsService.js";

import { ClassificationInsert } from "../protocols/ClassificationProtocol.js";

export async function getClassifications(
  req: Request,
  res: Response
): Promise<void> {
  const listClassifications = await selectClassifications();

  res.status(200).send(listClassifications);
}

export async function postClassifications(
  req: Request,
  res: Response
): Promise<void> {
  const classification = req.body as ClassificationInsert;

  const { error } = classificationSchema.validate(classification);
  if (error) {
    res.status(422).send({ message: error.details[0].message });
    return;
  }

  await checkIfClassificationExists(classification.name);

  await insertClassification(classification.name);

  res.sendStatus(201);
}
