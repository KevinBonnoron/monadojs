import { isArray, isNil, isObject } from '../../utils';

export const length =
  () =>
  <T>(values: T) =>
    isNil(values) ? 0 : isArray<T>(values) ? values.length : isObject<T>(values) ? Object.keys(values).length : 0;
