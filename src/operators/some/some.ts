import { eq } from '../../filters/eq/eq';
import { Filter } from '../../types/filter.type';
import { isCollection, isFunction } from '../../utils/object/object.utils';

export const some =
  <P>(predicate: P | Filter) =>
  <S>(source: S) => {
    if (!isFunction(predicate)) {
      predicate = eq(predicate);
    }

    return isCollection(source) ? [...source].some(predicate) : predicate(source);
  };
