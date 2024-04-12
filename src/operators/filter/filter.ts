import type { Collection, Filter, QueryFilterType } from '../../types';
import { ɵcopyCollection } from '../../utils/collection/collection.utils';
import { createFilterFn } from '../../utils/filter/filter.utils';

export function filter(predicate: Filter): <S extends Collection>(source: S) => S;
export function filter<E extends object | number>(predicate: QueryFilterType<E>): <S extends Collection<E>>(source: S) => S;
export function filter(predicate: Filter | QueryFilterType<object>) {
  const predicateFn = createFilterFn(predicate);
  return (source: Collection<object>) => ɵcopyCollection(source, [...source].filter(predicateFn));
}
