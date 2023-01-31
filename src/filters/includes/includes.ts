import { isArray, isMap } from '../../utils';

export const includes =
  (searchElement: any) =>
  <T>(value: T) =>
    isArray<T>(value) ? value.includes(searchElement) : isMap(value) ? [...value.values()].includes(searchElement) : value === searchElement;
