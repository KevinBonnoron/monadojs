import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const gte =
  (expected: number): Filter<number | number[]> =>
  (values: number | number[]) =>
    isArray(values) ? values.every(gte(expected)) : isNil(values) ? false : values >= expected;
