import type { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionShiftImpl = (collection: Collection): unknown => {
  if (isArray(collection)) {
    return collection.shift();
  }

  const result = [...collection].shift();
  collection.delete([...collection.keys()].shift());
  return result;
};

export function shift() {
  return <S>(source: S): unknown => (isCollection(source) ? collectionShiftImpl(source) : source);
}
