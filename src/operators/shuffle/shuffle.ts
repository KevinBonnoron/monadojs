import { isArray } from '../../utils';

export function shuffle() {
  return <S>(source: S): S =>
    isArray<S>(source)
      ? (source
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value) as S)
      : source;
}
