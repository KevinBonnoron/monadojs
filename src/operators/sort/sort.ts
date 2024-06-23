import type { Sorters } from '../../types';
import { isArray, isSet, ɵcopyCollection } from '../../utils';

const sortImpl =
  <S>(predicates: Sorters): ((a: S, b: S) => number) =>
  (a: S, b: S) =>
    predicates.reduce((value, predicate) => (value === 0 ? predicate(a, b) : value), 0);

export function sort(...predicates: Sorters): <S>(source: S) => S {
  return <S>(source: S) => (isArray(source) || isSet(source) ? ɵcopyCollection(source, [...source].sort(sortImpl(predicates))) : source) as S;
}
