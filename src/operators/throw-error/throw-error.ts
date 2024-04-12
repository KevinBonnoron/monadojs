export function throwError(error: Error) {
  return () => {
    throw error;
  };
}
