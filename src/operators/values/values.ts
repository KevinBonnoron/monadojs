import { isArray, isMap, isObject, isSet } from '../../utils';

export const values =
  () =>
  <T extends object>(value: T) =>
    isArray<T>(value)
      ? [...value.values()]
      : isMap(value)
      ? [...value.values()]
      : isSet(value)
      ? [...value.values()]
      : isObject<T>(value)
      ? Object.values(value)
      : value;
