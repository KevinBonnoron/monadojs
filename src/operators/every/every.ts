import type { Filter } from '../../types';
import { isCollection, isPlainObject } from '../../utils';

export function every(predicate: Filter) {
  return <S>(source: S): boolean => (isCollection<S>(source) ? [...source].every(predicate) : isPlainObject(source) ? Object.entries(source).every(predicate) : predicate(source));
}
