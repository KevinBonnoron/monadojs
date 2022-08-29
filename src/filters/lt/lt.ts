import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const lt =
  (expected: number): Filter<number | number[]> =>
  (values: number | number[]) =>
    isArray(values) ? values.every(lt(expected)) : isNil(values) ? false : values < expected;
