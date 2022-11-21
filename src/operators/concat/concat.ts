import { isArray } from '../../utils';

export const concat =
  <S>(...sources: S[]) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.concat(...(sources as unknown as T[])) : [values].concat(...(sources as unknown as T[]));
