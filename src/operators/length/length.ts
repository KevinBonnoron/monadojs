import { isCollection, isNil, isPlainObject, keysOf } from '../../utils';

export function length(): <S>(source: S) => number {
  return <S>(source: S) => (isNil(source) ? 0 : isCollection<S>(source) ? [...source.entries()].length : isPlainObject<S>(source) ? [...keysOf(source)].length : 0);
}
