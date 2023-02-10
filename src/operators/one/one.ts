import { eq } from '../../filters';
import { Filter } from '../../types';
import { isArray, isFunction } from '../../utils';

export const one =
  <V>(predicate: V | Filter) =>
  <T>(source: T) => {
    if (!isFunction(predicate)) {
      predicate = eq(predicate);
    }

    return isArray<T>(source) ? source.filter(predicate).length === 1 : predicate(source);
  };
