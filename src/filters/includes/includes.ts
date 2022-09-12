import { isArray } from '../../utils';

export const includes =
  <T>(searchedValue: T) =>
  (values: T | T[]) =>
    isArray(values) ? values.includes(searchedValue) : values === searchedValue;
