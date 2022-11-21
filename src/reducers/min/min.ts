const minImpl = <T extends string | number>(a: T, b: T): T => (a < b ? a : b);

export const min =
  <T extends string | number>(minFn: (a: T, b: T) => T = minImpl) =>
  (previousValue: T, currentValue: T) =>
    minFn(previousValue, currentValue);
