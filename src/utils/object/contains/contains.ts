import { Collection } from '../../../types/collection.type';
import { isArray } from '../is-array/is-array';
import { isCollection } from '../is-collection/is-collection';
import { isEqual } from '../is-equal/is-equal';
import { isString } from '../is-string/is-string';

export const contains = <S>(source: Collection<S> | string, searchElement: S) => (
  isArray<S>(source) ? source.some((value) => isEqual(value, searchElement)) :
    isCollection<S>(source) ? [...source.values()].some((value) => isEqual(value, searchElement)) :
      isString(source) ? source.includes(searchElement as string) :
        false
);
