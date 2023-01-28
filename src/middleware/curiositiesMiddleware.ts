import { Request, Response, NextFunction } from "express";

import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol.js";

import { fetchClassificationById } from "../repositoiries/classificationsRepository.js";
import { fetchCuriosityById } from "../repositoiries/curiositiesRepository.js";

import {
  curiositiesUpdateSchema,
  curiositySchema,
} from "../schema/curiositiesSchema.js";

export async function validPostCuriosity(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const curiosity = req.body as CuriositiesInsert;

  try {
    const { error } = curiositySchema.validate(curiosity, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      res.status(422).send({ message: errors });
      return;
    }

    const classificationExist = await fetchClassificationById(
      curiosity.classificationId
    );
    if (classificationExist.rowCount === 0) {
      res.status(400).send({ message: "Invalid classification" });
      return;
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function validUpdateCuriosity(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const editedCuriosity = req.body as CuriositiesUpdate;

  try {
    const { error } = curiositiesUpdateSchema.validate(editedCuriosity, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      res.status(422).send({ message: errors });
      return;
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function validateIfCuriosityExists(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const curiosityId: number = Number(req.params.id);

  try {
    const curiosityExist = await fetchCuriosityById(curiosityId);
    if (curiosityExist.rowCount === 0) {
      res.status(400).send({ message: "Invalid curiosity" });
      return;
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
