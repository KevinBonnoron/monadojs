import { Collection } from '../../types';
import { isCollection, ɵcopyCollection } from '../../utils';

export const concat =
  <S>(...sources: S[]) =>
  <T>(source: T): Collection<unknown> =>
    isCollection(source) ? ɵcopyCollection(source, [...source].concat(sources)) : [source].concat(...(sources as unknown as T[]));
