import prisma from "../database/db.js";

import {
  Curiosities,
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol";

export function fetchCuriosities() {
  return prisma.curiosities.findMany({ orderBy: { createdAt: "desc" } });
}

export function fetchCuriosityById(curiosityId: number) {
  return prisma.curiosities.findUnique({ where: { id: curiosityId } });
}

export function fetchCuriositiesByClassification(classificationsId: number) {
  return prisma.curiosities.findMany({ where: { classificationsId } });
}

export function insertCuriosity(curiosity: CuriositiesInsert) {
  return prisma.curiosities.create({data: curiosity})
}

export function updateACuriosity(
  editedCuriosity: CuriositiesUpdate,
  curiosityId: number
) {
  return prisma.curiosities.update({
    where: { id: curiosityId },
    data: editedCuriosity,
  });
}

export function deleteACuriosity(curiosityId: number) {
  return prisma.curiosities.delete({ where: { id: curiosityId } });
}
