import { Filter } from '../../types';
import { isArray } from '../../utils';

export const one =
  <T>(predicate: Filter<T>) =>
  (value: T) =>
    isArray<T>(value) ? value.filter(predicate).length === 1 : predicate(value);
