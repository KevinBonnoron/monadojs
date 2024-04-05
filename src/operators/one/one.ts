import { eq } from '../../filters';
import { Filter } from '../../types';
import { isCollection, isFunction } from '../../utils';

export const one =
  <P>(predicate: P | Filter) =>
  <S>(source: S): boolean => {
    let operator = predicate as Filter;
    if (!isFunction(predicate)) {
      operator = eq(predicate);
    }

    return isCollection<S>(source) ? [...source].filter(operator).length === 1 : operator(source);
  };
