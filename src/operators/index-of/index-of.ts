import { isArray, isObject } from '../../utils';
import { keys } from '../keys/keys';

export const indexOf =
  (searchedValue: any) =>
  <S>(source: S) =>
    isArray<S>(source)
      ? source.indexOf(searchedValue)
      : isObject<S>(source)
      ? keys()(source).find((key) => source[key] === searchedValue) ?? -1
      : source === searchedValue
      ? 0
      : -1;
