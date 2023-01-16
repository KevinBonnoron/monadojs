import { isArray, isNil, isObject } from '../../utils';

export const length =
  () =>
  <T>(value: T) =>
    isNil(value) ? 0 : isArray<T>(value) ? value.length : isObject<T>(value) ? Object.keys(value).length : 0;
