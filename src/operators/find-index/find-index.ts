import { eq } from '../../filters';
import { Filter } from '../../types';
import { isArray, isFunction } from '../../utils';

export const findIndex =
  <P>(predicate: P | Filter) =>
  <S>(source: S) => {
    if (!isFunction(predicate)) {
      predicate = eq(predicate);
    }

    return isArray<S>(source) ? source.findIndex(predicate) : predicate(source) ? 0 : -1;
  };
