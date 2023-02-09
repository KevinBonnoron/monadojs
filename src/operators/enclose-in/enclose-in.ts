export const encloseIn =
  <P extends string>(key: P) =>
  <T>(source: T) =>
    ({ [key]: source } as Record<P, T>);
