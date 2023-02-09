import { isArray } from '../../utils';

export const reverse =
  () =>
  <T>(source: T) =>
    isArray<T>(source) ? [...source].reverse() : source;
