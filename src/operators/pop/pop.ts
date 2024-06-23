import type { Collection } from '../../types';
import { isArray, isCollection } from '../../utils';

const collectionPopImpl = (collection: Collection) => {
  if (isArray(collection)) {
    return collection.pop();
  }

  const result = [...collection].pop();
  if (result) {
    collection.delete([...collection.keys()].pop());
  }

  return result;
};

export function pop(): <S extends Collection>(source: S) => unknown {
  return <S extends Collection>(source: S): unknown => (isCollection(source) ? collectionPopImpl(source) : source);
}
