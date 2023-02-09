import { or } from '../../logicals';
import { isArray, isNumber, isString } from '../../utils';

const isStringOrNumber = or(isString, isNumber);

export const gt =
  (expected: number | string) =>
  <T = number | string>(source: T): boolean =>
    isArray<T>(source) ? source.every(gt(expected)) : isStringOrNumber(source) ? source > expected : false;
