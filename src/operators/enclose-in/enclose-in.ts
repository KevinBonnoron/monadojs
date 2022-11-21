export const encloseIn =
  (key: string) =>
  <T>(values: T) => ({ [key]: values });
