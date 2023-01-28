import { ResultBuilder } from "pg";
import connection from "../database/db.js";

import {
  Curiosities,
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol";

export function fetchCuriosities() {
  return connection.query<Curiosities>(
    `SELECT * FROM curiosities ORDER BY "createdAt" DESC`
  );
}

export function fetchCuriosityById(curiosityId: number) {
  return connection.query<Curiosities>(
    `SELECT * FROM curiosities WHERE "id"=$1`,
    [curiosityId]
  );
}

export function fetchCuriositiesByClassification(classificationId: number) {
  return connection.query<Curiosities>(
    `SELECT * FROM curiosities WHERE "classificationsId"=$1  ORDER BY "createdAt" DESC`,
    [classificationId]
  );
}

export function insertCuriosity(curiosity: CuriositiesInsert) {
  return connection.query<CuriositiesInsert>(
    `INSERT INTO curiosities 
        (author, title, description, "classificationsId") 
    VALUES 
        ($1, $2, $3, $4)`,
    [
      curiosity.author,
      curiosity.title,
      curiosity.description,
      curiosity.classificationId,
    ]
  );
}

export function updateACuriosity(
  editedCuriosity: CuriositiesUpdate,
  curiosityId: number
) {
  return connection.query<CuriositiesInsert>(
    `UPDATE curiosities SET title=$1 , description=$2 WHERE id= $3`,
    [editedCuriosity.title, editedCuriosity.description, curiosityId]
  );
}

export function deleteACuriosity(curiosityId: number) {
  return connection.query<object>(`DELETE FROM curiosities WHERE id=$1`, [curiosityId]);
}
