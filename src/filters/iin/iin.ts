import { isArray, isMap } from '../../utils';

export const iin =
  <C>(container: C) =>
  <T>(value: T) =>
    isArray<T>(container) ? container.includes(value) : isMap<unknown, T>(container) ? [...container.values()].includes(value) : false;
