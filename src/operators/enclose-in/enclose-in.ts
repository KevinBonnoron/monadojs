export const encloseIn =
  <P extends string>(key: P) =>
  <T>(values: T) =>
    ({ [key]: values } as Record<P, T>);
