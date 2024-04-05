import { Filter } from '../../types';
import { isCollection, isPlainObject } from '../../utils';

export const every =
  (predicate: Filter) =>
  <S>(source: S): boolean =>
    isCollection<S>(source) ? [...source].every(predicate) : isPlainObject(source) ? Object.entries(source).every(predicate) : predicate(source);
