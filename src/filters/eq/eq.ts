import { Filter } from '../../types';

const eqImpl = <T>(a: T, b: T) => a === b;

export const eq =
  <T>(expected: unknown, comparisonFn: (a: unknown, b: unknown) => boolean = eqImpl): Filter<T> =>
  (value: unknown): value is T =>
    comparisonFn(value, expected);
