import { Filter, ObjectFilterType } from '../../types';
import { isCollection, ɵcopyCollection } from '../../utils';
import { toFilterFn } from '../../utils/filter/filter.utils';

export function filter(predicate: Filter): <S>(source: S) => S;
export function filter<E>(predicate: ObjectFilterType<Partial<E>>): <S extends E>(source: S) => S;
export function filter(predicate: Filter | ObjectFilterType<object>) {
  const predicateFn = toFilterFn(predicate);
  return <S>(source: S) => isCollection(source) ? (ɵcopyCollection(source, [...source].filter(predicateFn)) as S) : ([source].filter(predicateFn) as S);
}
