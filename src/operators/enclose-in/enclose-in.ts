export const encloseIn =
  <T>(key: string) =>
  (values: T) => ({ [key]: values });
