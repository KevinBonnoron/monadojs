import { isArray, isMap } from '../../utils';

export const includes =
  (searchedValue: any) =>
  <T>(value: T) =>
    isArray<T>(value) ? value.includes(searchedValue) : isMap(value) ? [...value.values()].includes(searchedValue) : value === searchedValue;
