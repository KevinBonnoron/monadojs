import { Filter, Operator } from '../../types';
import { isArray } from '../../utils';

export const find =
  <T>(predicate: Filter<T>): Operator =>
  (values: T | T[]) =>
    isArray(values) ? values.find(predicate) : predicate(values);
