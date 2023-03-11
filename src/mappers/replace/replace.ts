import { isArray, isString } from '../../utils';

export const replace =
  (search: string | RegExp, replacement: string) =>
  <S>(source: S): S =>
    isArray<S>(source) ? (source.map(replace(search, replacement)) as S) : isString(source) ? (source.replace(search, replacement) as S) : source;
