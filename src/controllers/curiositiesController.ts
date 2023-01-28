import { Request, Response } from "express";

import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol.js";

import {
  fetchCuriosities,
  fetchCuriositiesByClassification,
  insertCuriosity,
  updateACuriosity,
  deleteACuriosity,
} from "../repositoiries/curiositiesRepository.js";

export async function getCuriosities(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { rows: listCuriosities } = await fetchCuriosities();

    res.status(200).send(listCuriosities);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function getCuriositiesByClassification(
  req: Request,
  res: Response
): Promise<void> {
  const classificationId: number = Number(req.params.classificationId);

  try {
    const { rows: listCuriositiesByClassification } =
      await fetchCuriositiesByClassification(classificationId);

    res.status(200).send(listCuriositiesByClassification);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function postCuriosity(
  req: Request,
  res: Response
): Promise<void> {
  const curiosity = req.body as CuriositiesInsert;

  try {
    await insertCuriosity(curiosity);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function updateCuriosity(
  req: Request,
  res: Response
): Promise<void> {
  const editedCuriosity = req.body as CuriositiesUpdate;
  const curiosityId: number = Number(req.params.id);

  try {
    await updateACuriosity(editedCuriosity, curiosityId);

    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function deleteCuriosity(
  req: Request,
  res: Response
): Promise<void> {
  const curiosityId: number = Number(req.params.id);

  try {
    await deleteACuriosity(curiosityId);

    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
