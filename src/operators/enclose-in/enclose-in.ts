export const encloseIn =
  <P extends string>(key: P) =>
  <S>(source: S) =>
    ({ [key]: source } as Record<P, S>);
