import { classifications } from "@prisma/client";
import { error_conflict } from "../errors/conflictError.js";
import { not_found_error } from "../errors/notFoundError.js";
import {
  fetchClassificationById,
  fetchClassificationByName,
  fetchClassifications,
  insertAClassification,
} from "../repositoiries/classificationsRepository.js";

export async function selectClassifications(): Promise<classifications[]> {
  const listClassifications = await fetchClassifications();
  return listClassifications;
}

export async function checkIfClassificationExistsByName(
  name: string
): Promise<void> {
  const classificationExist = await fetchClassificationByName(name);

  if (classificationExist) throw error_conflict("classification");
}

export async function checkIfClassificationExistsById(
  classificationsId: number
): Promise<void> {
  const classificationExist = await fetchClassificationById(classificationsId);

  if (!classificationExist) throw not_found_error("classification");
}

export async function insertClassification(name: string): Promise<void> {
  await insertAClassification(name);
}
