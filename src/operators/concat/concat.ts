import { isArray } from '../../utils';

export const concat =
  <S>(...sources: S[]) =>
  <T>(source: T) =>
    isArray<T>(source) ? source.concat(...(sources as unknown as T[])) : [source].concat(...(sources as unknown as T[]));
