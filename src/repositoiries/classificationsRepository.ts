import prisma from "../database/db.js";

import {
  Classification,
  ClassificationInsert,
} from "../protocols/ClassificationProtocol.js";

export function fetchClassifications() {
  return prisma.classifications.findMany();
}

export function fetchClassificationByName(name: string) {
  return prisma.classifications.findUnique({ where: { name } });
}

export function fetchClassificationById(classificationsId: number) {
  return prisma.classifications.findUnique({ where: { id: classificationsId } });
}

export function insertClassification(name: string) {
  return prisma.classifications.create({ data: { name } });
}
