import { eq } from '../../filters';
import { Filter } from '../../types';
import { isCollection, isFunction } from '../../utils';

export const none =
  <P>(predicate: P | Filter) =>
  <S>(source: S): boolean => {
    const filter = isFunction(predicate) ? predicate : eq(predicate);
    return isCollection(source) ? ![...source].some(filter) : !filter(source);
  };
