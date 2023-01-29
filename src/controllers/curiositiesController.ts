import { Request, Response } from "express";

import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol.js";

import {
  deleteACuriosity,
  insertCuriosity,
  selectCuriosities,
  selectCuriositiesByClassification,
  updateACuriosity,
} from "../services/curiositiesServices.js";

export async function getCuriosities(
  req: Request,
  res: Response
): Promise<void> {
  const listCuriosities = await selectCuriosities();

  res.status(200).send(listCuriosities);
}

export async function getCuriositiesByClassification(
  req: Request,
  res: Response
): Promise<void> {
  const classificationId: number = Number(req.params.classificationId);

  const listCuriositiesByClassification =
    await selectCuriositiesByClassification(classificationId);

  res.status(200).send(listCuriositiesByClassification);
}

export async function postCuriosity(
  req: Request,
  res: Response
): Promise<void> {
  const curiosity = req.body as CuriositiesInsert;

  await insertCuriosity(curiosity);

  res.sendStatus(201);
}

export async function updateCuriosity(
  req: Request,
  res: Response
): Promise<void> {
  const editedCuriosity = req.body as CuriositiesUpdate;
  const curiosityId: number = Number(req.params.id);

  await updateACuriosity(editedCuriosity, curiosityId);

  res.sendStatus(200);
}

export async function deleteCuriosity(
  req: Request,
  res: Response
): Promise<void> {
  const curiosityId: number = Number(req.params.id);

  await deleteACuriosity(curiosityId);

  res.sendStatus(200);
}
