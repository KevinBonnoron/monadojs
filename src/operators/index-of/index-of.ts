import { isArray, isObject } from '../../utils';
import { keys } from '../keys/keys';

export const indexOf =
  (searchedValue: any) =>
  <T>(source: T) =>
    isArray<T>(source)
      ? source.indexOf(searchedValue)
      : isObject<T>(source)
      ? keys()(source).find((key) => source[key] === searchedValue) ?? -1
      : source === searchedValue
      ? 0
      : -1;
