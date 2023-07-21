import { Collection, Filter, FilterPropertyType } from '../../types';
import { isCollection } from '../../utils';
import { toFilterFn } from '../../utils/filters/filters.utils';

export function find(predicate: Filter): <S>(source: S) => S;
export function find<E extends Record<string, unknown>>(predicate: FilterPropertyType<E>): <S extends E>(source: S | Collection<S>) => S;
export function find(predicate: Filter | FilterPropertyType<unknown>) {
  const predicateFn = toFilterFn(predicate);

  return <S>(source: S) => isCollection(source) ? [...source].find(predicateFn) : predicateFn(source) ? source : undefined;
}
