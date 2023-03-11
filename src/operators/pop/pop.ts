import { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionPopImpl = (collection: Collection) => {
  const result = [...collection].pop();
  collection.delete([...collection.keys()].pop());
  return result;
};

export const pop =
  () =>
  <S>(source: S) =>
    isArray(source) ? source.pop() : isCollection(source) ? collectionPopImpl(source) : source;
