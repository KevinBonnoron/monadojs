import { Operator } from '../../types';
import { isArray } from '../../utils';

export const every =
  (predicate: Operator<unknown, boolean>) =>
  <T>(source: T) =>
    isArray<T>(source) ? source.every(predicate) : predicate(source);
