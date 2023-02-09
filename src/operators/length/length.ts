import { isArray, isNil, isObject } from '../../utils';

export const length =
  () =>
  <T>(source: T) =>
    isNil(source) ? 0 : isArray<T>(source) ? source.length : isObject<T>(source) ? Object.keys(source).length : 0;
