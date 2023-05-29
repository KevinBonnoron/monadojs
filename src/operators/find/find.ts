import { Filter } from '../../types';
import { isCollection, isPlainObject } from '../../utils';

export const find =
  (predicate: Filter) => <S>(source: S) => isCollection<S>(source)
      ? [...source].find(predicate)
      : isPlainObject(source)
      ? Object.entries(source).find(predicate)
      : predicate(source)
      ? source
      : undefined;
