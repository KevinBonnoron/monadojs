import { Collection, Filter, ObjectFilterType, UnwrapCollectionValue } from '../../types';
import { createFilterFn } from '../../utils/filter/filter.utils';

export function find(predicate: Filter): <S extends Collection>(source: S) => UnwrapCollectionValue<S>;
export function find<E extends Record<PropertyKey, unknown>>(predicate: ObjectFilterType<E>): <S extends Collection<E>>(source: S) => UnwrapCollectionValue<S>;
export function find(predicate: Filter | ObjectFilterType<object>) {
  const predicateFn = createFilterFn<object>(predicate);

  return (source: Collection<object>) => [...source].find(predicateFn);
}
