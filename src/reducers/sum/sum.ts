import { isNumber, isString } from '../../utils';

const sumImpl = <T extends number | string>(a: T, b: T) => (isNumber(a) && isNumber(b) ? a + b : isString(a) && isString(b) ? a + b : a) as T;

export const sum =
  <T extends number | string>(sumFn: (a: T, b: T) => T = sumImpl) => (previousValue: T, currentValue: T) => sumFn(previousValue, currentValue);
