export function throwError(error: Error): () => never {
  return () => {
    throw error;
  };
}
