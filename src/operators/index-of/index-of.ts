import { Operator } from '../../types';
import { isArray, isObject } from '../../utils';

export const indexOf =
  <T>(operator: Operator<T, number>) =>
  (values: T | T[]) =>
    isArray(values) ? [...values.keys()] : isObject(values) ? (Object.getOwnPropertyNames(values) as unknown as ReadonlyArray<Key<T>>) : null;
