import { isArray, isString } from '../../utils';

export const endsWith =
  (expected: string) =>
  <T>(source: T): boolean =>
    isArray<T>(source) ? source.every(endsWith(expected)) : isString(source) ? source.endsWith(expected) : false;
