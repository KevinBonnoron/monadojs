import { isArray } from '../../utils';

export const startsWith =
  (expected: string) =>
  <T extends string>(value: T): boolean =>
    isArray<T>(value) ? value.every(startsWith(expected)) : value.startsWith(expected);
