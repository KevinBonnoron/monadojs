import { eq } from '../../filters';
import { Filter } from '../../types';
import { isArray, isFunction } from '../../utils';

export const none =
  <V>(predicate: V | Filter) =>
  <T>(source: T) => {
    if (!isFunction(predicate)) {
      predicate = eq(predicate);
    }

    return isArray<T>(source) ? !source.some(predicate) : !predicate(source);
  };
