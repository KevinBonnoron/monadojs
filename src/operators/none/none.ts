import { Filter, Operator } from '../../types';
import { isArray } from '../../utils';

export const none =
  <T>(predicate: Filter<T | T[]>): Operator =>
  (values: T | T[]) =>
    isArray(values) ? !values.some(predicate) : !predicate(values);
