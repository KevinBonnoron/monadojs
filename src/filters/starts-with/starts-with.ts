import { isString } from '../../utils';

export const startsWith =
  (expected: string) =>
  <S>(source: S): boolean =>
    isString(source) ? source.startsWith(expected) : false;
