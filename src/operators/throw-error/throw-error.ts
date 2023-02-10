export const throwError = (error: Error) => () => {
  throw error;
};
