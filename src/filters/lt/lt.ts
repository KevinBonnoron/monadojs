import { or } from '../../logicals';
import { isArray, isNumber, isString } from '../../utils';

const isStringOrNumber = or(isString, isNumber);

export const lt =
  (expected: number | string) =>
  <S = number | string>(source: S): boolean =>
    isArray<S>(source) ? source.every(lt(expected)) : isStringOrNumber(source) ? source < expected : false;
