import { isArray } from '../../utils';

export const endsWith =
  (expected: string) =>
  <T extends string>(values: T): values is T =>
    isArray<T>(values) ? values.every(endsWith(expected)) : values.endsWith(expected);
