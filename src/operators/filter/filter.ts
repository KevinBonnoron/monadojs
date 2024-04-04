import { Collection, Filter, QueryFilterType } from '../../types';
import { ɵcopyCollection } from '../../utils';
import { createFilterFn } from '../../utils/filter/filter.utils';

export function filter<E>(predicate: Filter): <S extends Collection<E>>(source: S) => S;
export function filter<E extends object, P extends QueryFilterType<E>>(predicate: P): <S extends Collection<E>>(source: S) => S;
export function filter(predicate: Filter | QueryFilterType<object>) {
  const predicateFn = createFilterFn(predicate);
  return (source: Collection<object>) => ɵcopyCollection(source, [...source].filter(predicateFn));
}
