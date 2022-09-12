import { isArray, isNil, isObject } from '../../utils';

export const length =
  <T>() =>
  (values: T | T[]) =>
    isNil(values) ? 0 : isArray(values) ? values.length : isObject(values) ? Object.keys(values).length : 0;
