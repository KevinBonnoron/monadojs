import { Filter } from '../../types';
import { isArray } from '../../utils';

export const none =
  <T>(predicate: Filter<T>) =>
  (source: T) =>
    isArray<T>(source) ? !source.some(predicate) : !predicate(source);
