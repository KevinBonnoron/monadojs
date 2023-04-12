const maxImpl = <T = number | string>(a: T, b: T): T => (a > b ? a : b);

export const max =
  <T = number | string>(maxFn: (a: T, b: T) => T = maxImpl) =>
  (previousValue: T, currentValue: T) =>
    maxFn(previousValue, currentValue);
