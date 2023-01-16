import { Filter, Operator } from '../../types';
import { isArray, isFunction } from '../../utils';

const someFilterImpl = <T>(predicate: Filter<unknown>, value: T) => (isArray<T>(value) ? value.some(predicate) : predicate(value));
const someValueImpl = <T>(searchedValue: any, value: T) =>
  isArray<T>(value) ? value.some((value) => value === searchedValue) : value === searchedValue;

export const some =
  <V>(predicate: V | Operator<unknown, boolean>) =>
  <T>(value: T) =>
    isFunction(predicate) ? someFilterImpl(predicate, value) : someValueImpl(predicate, value);
