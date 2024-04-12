import type { Operator } from '../../types';

export function iif<C extends Operator<I>, T extends Operator<I>, I>(condition: C, trueFn: T): <S extends I>(source: S) => ReturnType<T> | undefined;
export function iif<C extends Operator<I>, T extends Operator<I>, F extends Operator<I>, I>(condition: C, trueFn: T, falseFn: F): <S extends I>(source: S) => ReturnType<T> | ReturnType<F>;
export function iif(condition: Operator, trueFn: Operator, falseFn?: Operator) {
  return (source: unknown) => {
    return condition(source) ? trueFn(source) : falseFn ? falseFn(source) : undefined;
  };
}
