import { isArray } from '../../utils';

export const concat =
  <S>(...sources: S[]) =>
  <T>(value: T) =>
    isArray<T>(value) ? value.concat(...(sources as unknown as T[])) : [value].concat(...(sources as unknown as T[]));
