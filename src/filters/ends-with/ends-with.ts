import { isArray } from '../../utils';

export const endsWith =
  (expected: string) =>
  <T extends string>(value: T): boolean =>
    isArray<T>(value) ? value.every(endsWith(expected)) : value.endsWith(expected);
