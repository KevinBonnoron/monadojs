import { isArray } from '../../utils';

export const reverse =
  () =>
  <S>(source: S) =>
    isArray<S>(source) ? [...source].reverse() : source;
