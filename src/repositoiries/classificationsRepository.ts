import connection from "../database/db.js";

import {
  Classification,
  ClassificationInsert,
} from "../protocols/ClassificationProtocol.js";

export function fetchClassifications() {
  return connection.query<Classification>(`SELECT * FROM classifications`);
}

export function fetchClassificationByName(classification: string) {
  return connection.query<Classification>(
    `SELECT * FROM classifications WHERE name=$1`,
    [classification]
  );
}

export function fetchClassificationById(classificationId: number) {
  return connection.query<Classification>(
    `SELECT * FROM classifications WHERE id=$1`,
    [classificationId]
  );
}

export function insertClassification(classification: string) {
  return connection.query<ClassificationInsert>(
    `INSERT INTO classifications (name) VALUES ($1)`,
    [classification]
  );
}
