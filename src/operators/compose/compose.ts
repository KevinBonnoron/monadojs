import { Operator } from '../../types';

/**
 * Call all operators one after the other using the previous result as next operator input
 * @param operators
 * @returns
 */
export function compose<A>(): Operator<A, A>;
export function compose<A, B>(o1: Operator<A, B>): Operator<A, B>;
export function compose<A, B, C>(o1: Operator<A, B>, o2: Operator<B, C>): Operator<A, C>;
export function compose<A, B, C, D>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>): Operator<A, D>;
export function compose<A, B, C, D, E>(o1: Operator<A, B>, o2: Operator<B, C>, o3: Operator<C, D>, o4: Operator<D, E>): Operator<A, E>;
export function compose<T>(...operators: Operator[]) {
  return (values: T | T[]) => operators.reduce((value, operator) => operator(value), values);
}
