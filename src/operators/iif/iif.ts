import { Operator } from '../../types';

export function iif<T, I = any>(testFn: Operator<I>, trueFn: Operator<I, T>): <S extends I>(source: S) => T | undefined;
export function iif<T, F, I = any>(testFn: Operator<I>, trueFn: Operator<I, T>, falseFn: Operator<I, F>): <S extends I>(source: S) => T | F;
export function iif(testFn: Operator, trueFn: Operator, falseFn?: Operator) {
  return (source: unknown) => {
    return testFn(source) ? trueFn(source) : falseFn ? falseFn(source) : undefined;
  };
}
