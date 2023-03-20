export const encloseIn =
  <P extends PropertyKey>(key: P) =>
  <S>(source: S) =>
    ({ [key]: source } as Record<P, S>);
