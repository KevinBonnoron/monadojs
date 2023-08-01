import { AnyFunction } from '../../types';

export const tap = (fn: AnyFunction) => <S>(source: S) => {
  fn(source);
  return source;
};
