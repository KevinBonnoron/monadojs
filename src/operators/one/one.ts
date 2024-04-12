import { eq } from '../../filters';
import type { Filter } from '../../types';
import { isCollection, isFunction } from '../../utils';

export function one<P>(predicate: P | Filter) {
  return <S>(source: S): boolean => {
    let operator = predicate as Filter;
    if (!isFunction(predicate)) {
      operator = eq(predicate);
    }

    return isCollection<S>(source) ? [...source].filter(operator).length === 1 : operator(source);
  };
}
