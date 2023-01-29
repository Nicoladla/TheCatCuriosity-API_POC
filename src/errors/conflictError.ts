export function error_conflict(entity: string) {
  return {
    type: "error_conflict",
    message: `You cannot add an existing ${entity}`,
  };
}
