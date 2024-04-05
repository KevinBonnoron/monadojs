import { isCollection, ɵcopyCollection } from '../../utils';

export const reverse =
  () =>
  <S>(source: S): S =>
    isCollection(source) ? (ɵcopyCollection(source, [...source].reverse()) as S) : source;
