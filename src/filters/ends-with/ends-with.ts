import { Filter } from '../../types';
import { isArray } from '../../utils';

export const endsWith =
  <T extends string>(expected: string): Filter<T | T[]> =>
  (values: T | T[]): values is T =>
    isArray(values) ? values.every(endsWith(expected)) : values.endsWith(expected);
