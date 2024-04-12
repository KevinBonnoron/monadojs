import type { Reducer } from '../../types';

const minImpl = <T extends string | number>(a: T, b: T): T => (a < b ? a : b);

export function min(minFn: <T extends string | number>(a: T, b: T) => T = minImpl): Reducer {
  return <S extends string | number>(previousValue: S, currentValue: S): S => minFn(previousValue, currentValue);
}
