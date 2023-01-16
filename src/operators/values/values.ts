import { isArray, isMap, isObject } from '../../utils';

export const values =
  () =>
  <T extends object>(value: T) =>
    isArray<T>(value) ? [...value.values()] : isMap(value) ? [...value.values()] : isObject<T>(value) ? Object.values(value) : value;
