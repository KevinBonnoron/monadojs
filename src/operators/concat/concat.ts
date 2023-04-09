import { isCollection, ɵcopyCollection } from '../../utils';

export const concat =
  <S>(...sources: S[]) =>
  <T>(source: T) =>
    isCollection(source) ? ɵcopyCollection(source, [...source].concat(sources)) : [source].concat(...(sources as unknown as T[]));
