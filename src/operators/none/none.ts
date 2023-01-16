import { Filter } from '../../types';
import { isArray } from '../../utils';

export const none =
  <T>(predicate: Filter<T>) =>
  (value: T) =>
    isArray<T>(value) ? !value.some(predicate) : !predicate(value);
