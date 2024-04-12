import { not } from '../../logicals/not/not';
import type { Operator, Operators } from '../../types';
import { ɵisCatchOperator } from '../catch-error/catch-error';

export function pipe<A>(): Operator<A, A>;
export function pipe<A, B>(o1: Operator<A, B>): Operator<A, B>;
export function pipe<A, B, C>(o1: Operator<A, B>, o2: Operator<B, C>): Operator<A, C>;
export function pipe<A, B, C, D>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>): Operator<A, D>;
export function pipe<A, B, C, D, E>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>): Operator<A, E>;
export function pipe<A, B, C, D, E, F>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>, o5: Operator<E, F>): Operator<A, F>;
export function pipe<A, B, C, D, E, F, G>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>, o5: Operator<E, F>, o6: Operator<F, G>): Operator<A, G>;
export function pipe<A, B, C, D, E, F, G, H>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>, o5: Operator<E, F>, o6: Operator<F, G>, o7: Operator<G, H>): Operator<A, H>;
export function pipe<A, B, C, D, E, F, G, H, I>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>, o5: Operator<E, F>, o6: Operator<F, G>, o7: Operator<G, H>, o8: Operator<H, I>): Operator<A, I>;
export function pipe<A, B>(...operators: Operators): Operator<A, B>;
export function pipe(...operators: Operators) {
  const catchOperator = operators.find(ɵisCatchOperator);
  const realOperators = operators.slice().filter(not(ɵisCatchOperator));
  return (source: unknown) => {
    if (realOperators.length === 0) {
      return source;
    }

    return realOperators.reduce((value, operator, _, array) => {
      try {
        return operator(value);
      } catch (e: unknown) {
        // Early eject reducer
        array.splice(1);
        if (catchOperator) {
          return catchOperator(e);
        }

        throw e;
      }
    }, source);
  };
}
