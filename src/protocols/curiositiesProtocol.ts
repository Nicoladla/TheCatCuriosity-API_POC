export type Curiosities = {
  id: number;
  author: string;
  title: string;
  description: string;
  classificationsId: number;
  createdAt: string | Date;
};

export type CuriositiesInsert = Omit<Curiosities, "id" | "createdAt">;

export type CuriositiesUpdate = Partial<
  Omit<Curiosities, "id" | "createdAt" | "author">
>;
