import { eq } from '../../filters';
import { Filter, Operator } from '../../types';
import { isCollection, isFunction } from '../../utils';

export const one =
  <P>(predicate: P | Filter) =>
  <S>(source: S) => {
    let operator = predicate as Operator;
    if (!isFunction(predicate)) {
      operator = eq(predicate);
    }

    return isCollection<S>(source) ? [...source].filter(operator).length === 1 : operator(source);
  };
