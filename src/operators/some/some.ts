import { eq } from '../../filters/eq/eq';
import type { Filter } from '../../types/filter.type';
import { isCollection, isFunction } from '../../utils/object';

export function some<P>(predicate: P | Filter) {
  return <S>(source: S): boolean => {
    const filter = isFunction(predicate) ? predicate : eq(predicate);
    return isCollection(source) ? [...source].some(filter) : filter(source);
  };
}
