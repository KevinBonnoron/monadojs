import { MonoTypeReducer } from '../../types';
import { isNumber, isString } from '../../utils';

const sumImpl = <T>(a: T, b: T): T => {
  if (isNumber(a) && isNumber(b)) {
    return (a + b) as T;
  }

  if (isString(a) && isString(b)) {
    return (a + b) as T;
  }

  return null as T;
};

export const sum =
  <T>(sumFn: (a: T, b: T) => T = sumImpl): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T) =>
    sumFn(previousValue, currentValue);
