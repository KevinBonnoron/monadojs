import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const lte =
  (expected: number): Filter<number | number[]> =>
  (values: number | number[]) =>
    isArray(values) ? values.every(lte(expected)) : isNil(values) ? false : values <= expected;
