import { isArray, isObject } from '../../utils';
import { keys } from '../keys/keys';

export const indexOf =
  <T>(value: T) =>
  (values: T) =>
    isArray<T>(values) ? values.indexOf(value) : isObject<T>(values) ? keys()(values).find((key) => values[key] === value) ?? -1 : 0;
