import { Filter } from '../../types';
import { isArray } from '../../utils';

export const one =
  <T>(predicate: Filter<T>) =>
  (values: T) =>
    isArray<T>(values) ? values.filter(predicate).length === 1 : predicate(values);
