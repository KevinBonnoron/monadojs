import { isArray } from '../../utils';

export const shuffle =
  () =>
  <S>(source: S) =>
    isArray<S>(source)
      ? (source
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value) as S)
      : source;
