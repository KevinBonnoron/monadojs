import { isArray, isString } from '../../utils';

export const replace =
  (search: string | RegExp, replacement: string) =>
  <T>(value: T): T =>
    isArray<T>(value) ? (value.map(replace(search, replacement)) as T) : isString(value) ? (value.replace(search, replacement) as T) : value;
