import { Filter } from '../../types';

export const endsWith =
  <T extends string>(expected: string): Filter<T> =>
  (value: T): value is T =>
    value.endsWith(expected);
