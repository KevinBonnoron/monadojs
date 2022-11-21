import { MonoTypeReducer } from '../../types';

const maxImpl = <T extends number | string>(a: T, b: T): T => (a > b ? a : b);

export const max =
  <T extends number | string>(maxFn: (a: T, b: T) => T = maxImpl): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T) =>
    maxFn(previousValue, currentValue);
