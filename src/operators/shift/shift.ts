import { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionShiftImpl = (collection: Collection) => {
  if (isArray(collection)) {
    return collection.shift();
  }

  const result = [...collection].shift();
  collection.delete([...collection.keys()].shift());
  return result;
};

export const shift =
  () =>
  <S>(source: S) =>
    isCollection(source) ? collectionShiftImpl(source) : source;
