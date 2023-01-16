import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const lt =
  <T = number | string>(expected: T): Filter<T> =>
  (value: T) =>
    isArray<T>(value) ? value.every(lt(expected)) : isNil(value) ? false : value < expected;
