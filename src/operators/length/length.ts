import { isCollection, isNil, isPlainObject, keysOf } from '../../utils';

export function length() {
  return <S>(source: S): number => (isNil(source) ? 0 : isCollection<S>(source) ? [...source.entries()].length : isPlainObject<S>(source) ? [...keysOf(source)].length : 0);
}
