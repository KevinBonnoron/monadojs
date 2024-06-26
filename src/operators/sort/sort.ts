import type { Sorters } from '../../types';
import { isArray, isSet, ɵcopyCollection } from '../../utils';

const sortImpl =
  (predicates: Sorters) =>
  <S>(a: S, b: S) =>
    predicates.reduce((value, predicate) => (value === 0 ? predicate(a, b) : value), 0);

export function sort(...predicates: Sorters) {
  return <S>(source: S) => (isArray(source) || isSet(source) ? ɵcopyCollection(source, [...source].sort(sortImpl(predicates))) : source) as S;
}
