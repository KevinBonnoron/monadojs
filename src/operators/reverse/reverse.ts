import { isArray } from '../../utils';

export const reverse =
  () =>
  <T>(value: T) =>
    isArray<T>(value) ? [...value].reverse() : value;
