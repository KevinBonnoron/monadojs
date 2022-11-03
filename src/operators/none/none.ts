import { Filter } from '../../types';
import { isArray } from '../../utils';

export const none =
  <T>(predicate: Filter<T>) =>
  (values: T) =>
    isArray<T>(values) ? !values.some(predicate) : !predicate(values);
