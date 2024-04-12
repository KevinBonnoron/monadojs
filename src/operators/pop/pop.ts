import type { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionPopImpl = (collection: Collection): unknown => {
  if (isArray(collection)) {
    return collection.pop();
  }

  const result = [...collection].pop();
  collection.delete([...collection.keys()].pop());
  return result;
};

export function pop() {
  return <S>(source: S): unknown => (isCollection(source) ? collectionPopImpl(source) : source);
}
