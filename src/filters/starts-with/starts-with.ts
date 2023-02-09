import { isArray } from '../../utils';

export const startsWith =
  (expected: string) =>
  <T extends string>(source: T): boolean =>
    isArray<T>(source) ? source.every(startsWith(expected)) : source.startsWith(expected);
