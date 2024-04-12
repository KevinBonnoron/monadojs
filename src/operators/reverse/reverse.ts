import { isCollection, ɵcopyCollection } from '../../utils';

export function reverse() {
  return <S>(source: S): S => (isCollection(source) ? (ɵcopyCollection(source, [...source].reverse()) as S) : source);
}
