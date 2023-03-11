import { or } from '../../logicals';
import { isArray, isNumber, isString } from '../../utils';

const isStringOrNumber = or(isString, isNumber);

export const gt =
  (expected: number | string) =>
  <S = number | string>(source: S): boolean =>
    isArray<S>(source) ? source.every(gt(expected)) : isStringOrNumber(source) ? source > expected : false;
