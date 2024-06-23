import type { Filter } from '../../types';
import { isCollection, isPlainObject } from '../../utils';

export function every(predicate: Filter): <S>(source: S) => boolean {
  return <S>(source: S) => (isCollection<S>(source) ? [...source].every(predicate) : isPlainObject(source) ? Object.entries(source).every(predicate) : predicate(source));
}
