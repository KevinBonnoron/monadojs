export const encloseIn =
  <P extends string>(key: P) =>
  <T>(value: T) =>
    ({ [key]: value } as Record<P, T>);
