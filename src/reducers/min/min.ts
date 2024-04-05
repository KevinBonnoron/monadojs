const minImpl = <T extends string | number>(a: T, b: T): T => (a < b ? a : b);

export const min =
  (minFn: <T extends string | number>(a: T, b: T) => T = minImpl) =>
  <S extends string | number>(previousValue: S, currentValue: S): S =>
    minFn(previousValue, currentValue);
