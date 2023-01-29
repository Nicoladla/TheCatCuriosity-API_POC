import { curiosities } from "@prisma/client";
import { not_found_error } from "../errors/notFoundError.js";
import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol.js";
import {
  deleteCuriosity,
  fetchCuriosities,
  fetchCuriositiesByClassification,
  fetchCuriosityById,
  insertACuriosity,
  updateCuriosity,
} from "../repositoiries/curiositiesRepository.js";

export async function selectCuriosities(): Promise<curiosities[]> {
  const listCuriosities = await fetchCuriosities();

  return listCuriosities;
}

export async function selectCuriositiesByClassification(
  classificationsId: number
): Promise<curiosities[]> {
  const listCuriositiesByClassification =
    await fetchCuriositiesByClassification(classificationsId);

  return listCuriositiesByClassification;
}

export async function insertCuriosity(
  curiosity: CuriositiesInsert
): Promise<void> {
  await insertACuriosity(curiosity);
}

export async function updateACuriosity(
  editedCuriosity: CuriositiesUpdate,
  curiosityId: number
): Promise<void> {
  await updateCuriosity(editedCuriosity, curiosityId);
}

export async function deleteACuriosity(curiosityId: number): Promise<void> {
  await deleteCuriosity(curiosityId);
}

export async function checkByIdIfCuriosityExists(
  curiosityId: number
): Promise<void> {
  const curiosityExist = await fetchCuriosityById(curiosityId);

  if (!curiosityExist) throw not_found_error("curiosity");
}
