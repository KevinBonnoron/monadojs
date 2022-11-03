import { Filter } from '../../types';
import { isEqual } from '../../utils';

export const eq =
  <T>(expected: T, comparisonFn: (a: unknown, b: T) => boolean = isEqual): Filter<T> =>
  (value: unknown) =>
    comparisonFn(value, expected);
