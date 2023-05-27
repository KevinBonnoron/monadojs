import { isString } from '../../utils';

export const endsWith =
  (expected: string) =>
  <S>(source: S): boolean =>
    isString(source) ? source.endsWith(expected) : false;
