import { eq } from '../../filters/eq/eq';
import { Filter } from '../../types/filter.type';
import { isCollection, isFunction } from '../../utils/object';

export const some =
  <P>(predicate: P | Filter) =>
  <S>(source: S): boolean => {
    const filter = isFunction(predicate) ? predicate : eq(predicate);
    return isCollection(source) ? [...source].some(filter) : filter(source);
  };
