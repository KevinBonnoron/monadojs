import { eq } from '../../filters/eq/eq';
import type { Filter } from '../../types/filter.type';
import { isCollection, isFunction } from '../../utils/object';

export function some<P>(predicate: P | Filter): <S>(source: S) => boolean {
  return <S>(source: S) => {
    const filter = isFunction(predicate) ? predicate : eq(predicate);
    return isCollection(source) ? [...source].some(filter) : filter(source);
  };
}
