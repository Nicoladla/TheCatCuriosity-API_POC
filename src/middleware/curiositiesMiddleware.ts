import { Request, Response, NextFunction } from "express";

import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol.js";

import {
  curiositiesUpdateSchema,
  curiositySchema,
} from "../schema/curiositiesSchema.js";
import { checkIfClassificationExistsById } from "../services/classificationsService.js";
import { checkByIdIfCuriosityExists } from "../services/curiositiesServices.js";

export async function validPostCuriosity(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const curiosity = req.body as CuriositiesInsert;

  const { error } = curiositySchema.validate(curiosity, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send({ message: errors });
    return;
  }

  await checkIfClassificationExistsById(curiosity.classificationsId);

  next();
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

  await checkByIdIfCuriosityExists(curiosityId);

  next();
}
