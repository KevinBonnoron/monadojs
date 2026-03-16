import type { AnyFunction } from '../../types';

export function tap(fn: AnyFunction): <S>(source: S) => S {
  return <S>(source: S): S => {
    fn(source);
    return source;
  };
}
