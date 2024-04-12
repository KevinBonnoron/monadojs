import type { AnyFunction } from '../../types';

export function tap(fn: AnyFunction) {
  return <S>(source: S): S => {
    fn(source);
    return source;
  };
}
