import { Collection, Filter, QueryFilterType, UnwrapCollectionValue } from '../../types';
import { createFilterFn } from '../../utils/filter/filter.utils';

export function find(predicate: Filter): <S extends Collection>(source: S) => UnwrapCollectionValue<S>;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function find<E = any>(predicate: QueryFilterType<E>): <S extends Collection<E>>(source: S) => UnwrapCollectionValue<S>;
export function find(predicate: Filter | QueryFilterType<object>) {
  const predicateFn = createFilterFn<object>(predicate);

  return (source: Collection<object>) => [...source].find(predicateFn);
}
