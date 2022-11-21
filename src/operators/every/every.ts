import { Operator } from '../../types';
import { isArray } from '../../utils';

export const every =
  (predicate: Operator<unknown, boolean>) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.every(predicate) : predicate(values);
