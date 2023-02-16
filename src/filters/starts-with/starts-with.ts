import { isArray, isString } from '../../utils';

export const startsWith =
  (expected: string) =>
  <T>(source: T): boolean =>
    isArray<T>(source) ? source.every(startsWith(expected)) : isString(source) ? source.startsWith(expected) : false;
