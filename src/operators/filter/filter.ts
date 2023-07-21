import { Collection, Filter, FilterPropertyType } from '../../types';
import { isCollection, ɵcopyCollection } from '../../utils';
import { toFilterFn } from '../../utils/filters/filters.utils';

export function filter(predicate: Filter): <S>(source: S) => S;
export function filter<E extends Record<string, unknown>>(predicate: FilterPropertyType<E>): <S extends E>(source: Collection<S>) => Collection<S>;
export function filter(predicate: Filter | FilterPropertyType<unknown>) {
  const predicateFn = toFilterFn(predicate);
  return <S>(source: S) => isCollection(source) ? (ɵcopyCollection(source, [...source].filter(predicateFn)) as S) : ([source].filter(predicateFn) as S);
}
