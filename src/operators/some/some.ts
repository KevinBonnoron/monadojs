import { Filter, Operator } from '../../types';
import { isArray, isFunction } from '../../utils';

const someFilterImpl = <T>(predicate: Filter<unknown>, values: T) => (isArray<T>(values) ? values.some(predicate) : predicate(values));
const someValueImpl = <T>(searchedValue: any, values: T) => (isArray<T>(values) ? values.some((value) => value === searchedValue) : values === searchedValue);

export const some =
  <V>(predicate: V | Operator<unknown, boolean>) =>
  <T>(values: T) =>
    isFunction(predicate) ? someFilterImpl(predicate, values) : someValueImpl(predicate, values);
