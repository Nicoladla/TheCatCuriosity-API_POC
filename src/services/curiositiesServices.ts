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

export async function selectCuriosities() {
  const listCuriosities = await fetchCuriosities();

  return listCuriosities;
}

export async function selectCuriositiesByClassification(
  classificationsId: number
) {
  const listCuriositiesByClassification =
    await fetchCuriositiesByClassification(classificationsId);

  return listCuriositiesByClassification;
}

export async function insertCuriosity(curiosity: CuriositiesInsert) {
  await insertACuriosity(curiosity);
}

export async function updateACuriosity(
  editedCuriosity: CuriositiesUpdate,
  curiosityId: number
) {
  await updateCuriosity(editedCuriosity, curiosityId);
}

export async function deleteACuriosity(curiosityId: number) {
  await deleteCuriosity(curiosityId);
}

export async function checkByIdIfCuriosityExists(curiosityId: number) {
  const curiosityExist = await fetchCuriosityById(curiosityId);
  
  if (!curiosityExist) throw not_found_error("curiosity");
}
