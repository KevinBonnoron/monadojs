import { MonoTypeReducer } from '../../types';
import { isNumber, isString } from '../../utils';

const maxImpl = <T>(a: T, b: T): T => {
  if ((isNumber(a) && isNumber(b)) || (isString(a) && isString(b))) {
    return a > b ? a : b;
  }

  return null as T;
};

export const max =
  <T>(maxFn: (a: T, b: T) => T = maxImpl): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T) =>
    maxFn(previousValue, currentValue);
