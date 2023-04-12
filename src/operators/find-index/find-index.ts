import { Filter } from '../../types/filter.type';
import { isCollection, isMap, isPlainObject } from '../../utils/object';

export const findIndex =
  (predicate: Filter) =>
  <S>(source: S): PropertyKey =>
    isMap(source)
      ? ([...source.keys()][[...source.values()].findIndex(predicate)] as PropertyKey) ?? -1
      : isCollection(source)
      ? [...source.values()].findIndex(predicate)
      : isPlainObject(source)
      ? Object.keys(source)[Object.values(source).findIndex(predicate)] ?? -1
      : predicate(source)
      ? 0
      : -1;
