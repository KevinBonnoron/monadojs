import { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionPopImpl = (collection: Collection) => {
  if (isArray(collection)) {
    return collection.pop();
  }

  const result = [...collection].pop();
  collection.delete([...collection.keys()].pop());
  return result;
};

export const pop =
  () => <S>(source: S) => isCollection(source) ? collectionPopImpl(source) : source;
