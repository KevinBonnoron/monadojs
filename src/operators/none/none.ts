import { Filter } from '../../types';
import { isArray } from '../../utils';

export const none =
  <T>(predicate: Filter<T | T[]>) =>
  (values: T | T[]) =>
    isArray(values) ? !values.some(predicate) : !predicate(values);
