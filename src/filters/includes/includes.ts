import { isArray } from '../../utils';

export const includes =
  (searchedValue: any) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.includes(searchedValue) : values === searchedValue;
