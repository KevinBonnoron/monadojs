import { Filter } from '../../types';
import { isEqual } from '../../utils';

export const eq =
  <E>(expected: E, comparisonFn: (a: any, b: any) => boolean = isEqual): Filter =>
  <T>(value: T) =>
    comparisonFn(value, expected);
