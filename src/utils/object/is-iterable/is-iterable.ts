import { isFunction } from '../is-function/is-function';
import { isNil } from '../is-nil/is-nil';

export const isIterable = <T>(value: any): value is Iterable<T> => !isNil(value) && isFunction(value[Symbol.iterator]);
