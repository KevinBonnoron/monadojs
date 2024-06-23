import { eq } from '../../filters';
import type { Filter } from '../../types';
import { isCollection, isFunction } from '../../utils';

export function none<P>(predicate: P | Filter): <S>(source: S) => boolean {
  return <S>(source: S): boolean => {
    const filter = isFunction(predicate) ? predicate : eq(predicate);
    return isCollection(source) ? ![...source].some(filter) : !filter(source);
  };
}
