import { Filter } from '../../types';
import { isArray } from '../../utils';

export const startsWith =
  <T extends string>(expected: string): Filter<T | T[]> =>
  (values: T | T[]): values is T =>
    isArray(values) ? values.every(startsWith(expected)) : values.startsWith(expected);
