import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const gt =
  (expected: number): Filter<number | number[]> =>
  (values: number | number[]) =>
    isArray(values) ? values.every(gt(expected)) : isNil(values) ? false : values > expected;
