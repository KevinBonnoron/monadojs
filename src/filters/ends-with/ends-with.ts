import { isArray, isString } from '../../utils';

export const endsWith =
  (expected: string) =>
  <S>(source: S): boolean =>
    isArray<S>(source) ? source.every(endsWith(expected)) : isString(source) ? source.endsWith(expected) : false;
