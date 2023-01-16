import { Operator } from '../../types';
import { isArray } from '../../utils';

export const every =
  (predicate: Operator<unknown, boolean>) =>
  <T>(value: T) =>
    isArray<T>(value) ? value.every(predicate) : predicate(value);
