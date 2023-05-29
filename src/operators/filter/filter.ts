import { Filter } from '../../types';
import { isCollection, ɵcopyCollection } from '../../utils';

export const filter =
  (predicate: Filter) => <S>(source: S) => isCollection(source) ? (ɵcopyCollection(source, [...source].filter(predicate)) as S) : ([source].filter(predicate) as S);
