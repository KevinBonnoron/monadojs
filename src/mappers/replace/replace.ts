import { isArray, isString } from '../../utils';

export const replace =
  (search: string | RegExp, replacement: string) =>
  <T>(values: T): T =>
    isArray<T>(values) ? (values.map(replace(search, replacement)) as T) : isString(values) ? (values.replace(search, replacement) as T) : values;
