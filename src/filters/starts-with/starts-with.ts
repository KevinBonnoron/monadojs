import { Filter } from '../../types';

export const startsWith =
  <T extends string>(expected: string): Filter<T> =>
  (value: T): value is T =>
    value.startsWith(expected);
