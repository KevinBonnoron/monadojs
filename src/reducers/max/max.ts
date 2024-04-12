import type { Reducer } from '../../types';

const maxImpl = <T = number | string>(a: T, b: T): T => (a > b ? a : b);

export function max(maxFn: <T extends string | number>(a: T, b: T) => T = maxImpl): Reducer {
  return <S extends number | string>(previousValue: S, currentValue: S): S => maxFn(previousValue, currentValue);
}
