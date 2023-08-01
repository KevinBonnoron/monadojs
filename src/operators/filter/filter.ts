import { Collection, Filter, ObjectFilterType } from '../../types';
import { ɵcopyCollection } from '../../utils';
import { createFilterFn } from '../../utils/filter/filter.utils';

export function filter(predicate: Filter): <S extends Collection>(source: S) => S;
export function filter<E extends Record<PropertyKey, unknown>>(predicate: ObjectFilterType<E>): <S extends Collection<E>>(source: S) => S;
export function filter(predicate: Filter | ObjectFilterType<object>) {
  const predicateFn = createFilterFn(predicate);
  return (source: Collection<object>) => ɵcopyCollection(source, [...source].filter(predicateFn));
}
