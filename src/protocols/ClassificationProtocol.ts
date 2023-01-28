export type Classification = {
  id: number;
  name: string;
};

export type ClassificationInsert = Omit<Classification, "id">;
