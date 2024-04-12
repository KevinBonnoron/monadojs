import type { Reducer } from '../../types';
import { isNumber, isString } from '../../utils';

const sumImpl = <T extends number | string>(a: T, b: T) => (isNumber(a) && isNumber(b) ? a + b : isString(a) && isString(b) ? a + b : a) as T;

export function sum<T extends number | string>(sumFn: (a: T, b: T) => T = sumImpl): Reducer {
  return (previousValue: T, currentValue: T): T => sumFn(previousValue, currentValue);
}
