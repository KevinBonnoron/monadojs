import { isCollection, ɵcopyCollection } from '../../utils';

export function reverse(): <S>(source: S) => S {
  return <S>(source: S): S => (isCollection(source) ? (ɵcopyCollection(source, [...source].reverse()) as S) : source);
}
