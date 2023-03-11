import { isArray, isString } from '../../utils';

export const startsWith =
  (expected: string) =>
  <S>(source: S): boolean =>
    isArray<S>(source) ? source.every(startsWith(expected)) : isString(source) ? source.startsWith(expected) : false;
