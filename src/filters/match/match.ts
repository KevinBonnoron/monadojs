import { Filter } from '../../types';

export const match =
  <T extends string>(expected: RegExp): Filter<T> =>
  (value: T): value is T =>
    expected.test(value);
