import { Request, Response } from "express";
import {
  fetchClassifications,
  fetchClassificationByName,
  insertClassification,
} from "../repositoiries/classificationsRepository.js";
import classificationSchema from "../schema/classificationsSchema.js";

import { ClassificationInsert } from "../protocols/ClassificationProtocol.js";

export async function getClassifications(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const listClassifications = await fetchClassifications();

    res.status(200).send(listClassifications.rows);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function postClassifications(
  req: Request,
  res: Response
): Promise<void> {
  const classification = req.body as ClassificationInsert;

  try {
    const { error } = classificationSchema.validate(classification);
    if (error) {
      res.status(422).send({ message: error.details[0].message });
      return;
    }

    const classificationExist = await fetchClassificationByName(
      classification.name
    );
    if (classificationExist.rowCount === 1) {
      res.status(409).send({ message: "Existing classification" });
      return;
    }

    await insertClassification(classification.name);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
