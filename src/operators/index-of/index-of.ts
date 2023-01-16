import { isArray, isObject } from '../../utils';
import { keys } from '../keys/keys';

export const indexOf =
  (searchedValue: any) =>
  <T>(value: T) =>
    isArray<T>(value)
      ? value.indexOf(searchedValue)
      : isObject<T>(value)
      ? keys()(value).find((key) => value[key] === searchedValue) ?? -1
      : value === searchedValue
      ? 0
      : -1;
