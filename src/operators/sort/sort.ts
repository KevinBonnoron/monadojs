import { Sorter } from '../../types';
import { isArray, isSet } from '../../utils';

const sortImpl =
  (predicates: Sorter[]) =>
  <S>(a: S, b: S) =>
    predicates.reduce((value, predicate) => (value === 0 ? predicate(a, b) : value), 0);

export const sort =
  (...predicates: Sorter[]) =>
  <S>(source: S) =>
    (isArray<S>(source) ? source.sort(sortImpl(predicates)) : isSet(source) ? new Set([...source].sort(sortImpl(predicates))) : source) as S;
