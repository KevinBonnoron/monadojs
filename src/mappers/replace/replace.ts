import { isArray, isString } from '../../utils';

export const replace =
  (search: string | RegExp, replacement: string) =>
  <T>(source: T): T =>
    isArray<T>(source) ? (source.map(replace(search, replacement)) as T) : isString(source) ? (source.replace(search, replacement) as T) : source;
