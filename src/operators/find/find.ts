import { Collection, Filter, ObjectFilterType } from '../../types';
import { isCollection } from '../../utils';
import { toFilterFn } from '../../utils/filter/filter.utils';

export function find(predicate: Filter): <S>(source: S) => S;
export function find<E extends Record<string, unknown>>(predicate: ObjectFilterType<E>): <S extends E>(source: S | Collection<S>) => S;
export function find(predicate: Filter | ObjectFilterType<object>) {
  const predicateFn = toFilterFn(predicate);

  return <S>(source: S) => isCollection(source) ? [...source].find(predicateFn) : predicateFn(source) ? source : undefined;
}
