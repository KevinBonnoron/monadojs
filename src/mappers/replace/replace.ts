import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const replace =
  <T extends string>(search: string | RegExp, replacement: string): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(replace(search, replacement)) : values.replace(search, replacement);
