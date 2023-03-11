import { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionShiftImpl = (collection: Collection) => {
  const result = [...collection].shift();
  collection.delete([...collection.keys()].shift());
  return result;
};

export const shift =
  () =>
  <S>(source: S) =>
    isArray(source) ? source.shift() : isCollection(source) ? collectionShiftImpl(source) : source;
