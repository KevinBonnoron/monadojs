import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const lt =
  <T = number | string>(expected: T): Filter<T> =>
  (values: T) =>
    isArray<T>(values) ? values.every(lt(expected)) : isNil(values) ? false : values < expected;
