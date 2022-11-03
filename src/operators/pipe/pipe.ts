import { MonotypeOperator, Operator } from '../../types';

export function pipe<A>(): Operator<A, A>;
export function pipe<A = any, B = any>(o1: Operator<A, B>): Operator<A | A[], B>;
export function pipe<A, B, C = any>(o1: Operator<A, B>, o2: Operator<B, C>): Operator<A, C>;
export function pipe<A, B, C, D = any>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>): Operator<A, D>;
export function pipe<A, B, C, D, E = any>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>): Operator<A, E>;
export function pipe<A, B, C, D, E, F = any>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>, o5: Operator<E, F>): Operator<A, F>;
export function pipe<A, B, C, D, E, F, G = any>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>, o5: Operator<E, F>, o6: Operator<F, G>): Operator<A, G>;
export function pipe(...operators: MonotypeOperator<unknown>[]) {
  return (value: unknown) => operators.reduce((value, operator) => operator(value), value);
}
