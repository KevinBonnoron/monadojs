import { eq } from '../../filters';
import { Filter } from '../../types';
import { isArray, isFunction } from '../../utils';

export const find =
  <P>(predicate: P | Filter) =>
  <S>(source: S) => {
    if (!isFunction(predicate)) {
      predicate = eq(predicate);
    }

    return isArray<S>(source) ? source.find(predicate) : predicate(source);
  };
