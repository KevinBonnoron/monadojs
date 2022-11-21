import { Filter } from '../../types';
import { isArray } from '../../utils';

export const startsWith =
  (expected: string): Filter =>
  <T extends string>(values: T) =>
    isArray<T>(values) ? values.every(startsWith(expected)) : values.startsWith(expected);
