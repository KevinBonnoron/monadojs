import { Filter } from '../../types';
import { isEqual } from '../../utils';

export const eq =
  <T>(expected: unknown, comparisonFn: (a: unknown, b: unknown) => boolean = isEqual): Filter<T> =>
  (value: unknown): value is T =>
    comparisonFn(value, expected);
