import { or } from '../../logicals';
import { isNumber, isString } from '../../utils';

const isStringOrNumber = or(isString, isNumber);

export const gt =
  (expected: number | string) => <S = number | string>(source: S): boolean => isStringOrNumber(source) ? source > expected : false;
