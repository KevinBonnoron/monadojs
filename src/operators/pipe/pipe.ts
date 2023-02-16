import { not } from '../../logicals/not/not';
import { MonotypeOperator, Operator } from '../../types';
import { ɵisCatchOperator } from '../catch-error/catch-error';

export function pipe<A>(): Operator<A, A>;
export function pipe<A, B>(o1: Operator<A, B>): Operator<A, B>;
export function pipe<A, B, C>(o1: Operator<A, B>, o2: Operator<B, C>): Operator<A, C>;
export function pipe<A, B, C, D>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>): Operator<A, D>;
export function pipe<A, B, C, D, E>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>): Operator<A, E>;
export function pipe<A, B, C, D, E, F>(
  o1: Operator<A, B>,
  o2: Operator<B, C>,
  o3: Operator<C, D>,
  o4: Operator<D, E>,
  o5: Operator<E, F>
): Operator<A, F>;
export function pipe<A, B, C, D, E, F, G>(
  o1: Operator<A, B>,
  o2: Operator<B, C>,
  o3: Operator<C, D>,
  o4: Operator<D, E>,
  o5: Operator<E, F>,
  o6: Operator<F, G>
): Operator<A, G>;
export function pipe<A, B, C, D, E, F, G, H>(
  o1: Operator<A, B>,
  o2: Operator<B, C>,
  o3: Operator<C, D>,
  o4: Operator<D, E>,
  o5: Operator<E, F>,
  o6: Operator<F, G>,
  o7: Operator<G, H>
): Operator<A, H>;
export function pipe<A, B, C, D, E, F, G, H, I>(
  o1: Operator<A, B>,
  o2: Operator<B, C>,
  o3: Operator<C, D>,
  o4: Operator<D, E>,
  o5: Operator<E, F>,
  o6: Operator<F, G>,
  o7: Operator<G, H>,
  o8: Operator<H, I>
): Operator<A, I>;
export function pipe<A, B>(...operators: MonotypeOperator[]): Operator<A, B>;
export function pipe(...operators: MonotypeOperator[]) {
  return (source: unknown) => {
    const catchOperator = operators.find(ɵisCatchOperator);
    return operators.filter(not(ɵisCatchOperator)).reduce((value, operator) => {
      try {
        return operator(value);
      } catch (e: unknown) {
        if (catchOperator) {
          return catchOperator(e);
        }

        throw e;
      }
    }, source);
  };
}
