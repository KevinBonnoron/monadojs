import { Operator } from '../../types';
import { isArray } from '../../utils';

export const some =
  (predicate: Operator<unknown, boolean>) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.some(predicate) : predicate(values);
