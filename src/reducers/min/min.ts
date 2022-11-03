import { MonoTypeReducer } from '../../types';
import { isNumber, isString } from '../../utils';

const minImpl = <T>(a: T, b: T): T => {
  if ((isNumber(a) && isNumber(b)) || (isString(a) && isString(b))) {
    return a < b ? a : b;
  }

  return null as T;
};

export const min =
  <T>(minFn: (a: T, b: T) => T = minImpl): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T) =>
    minFn(previousValue, currentValue);
