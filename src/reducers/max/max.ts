const maxImpl = <T = number | string>(a: T, b: T): T => (a > b ? a : b);

export const max =
  (maxFn: <T extends string | number>(a: T, b: T) => T = maxImpl) =>
  <S extends number | string>(previousValue: S, currentValue: S) =>
    maxFn(previousValue, currentValue);
