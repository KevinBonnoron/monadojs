import { MonotypeOperator, Operator } from '../../types';

/**
 * Call all operators one after the other combining the result of all
 * @param operators
 * @returns
 */
export function combine<A>(): Operator<A, A>;
export function combine<A, B>(o1: Operator<A, B>): Operator<A, [B]>;
export function combine<A, B, C>(o1: Operator<A, B>, o2: Operator<A, C>): Operator<A, [B, C]>;
export function combine<A, B, C, D>(o1: Operator<A, B>, o2: Operator<A, C>, o3: Operator<A, D>): Operator<A, [B, C, D]>;
export function combine<A, B, C, D, E>(o1: Operator<A, B>, o2: Operator<A, C>, o3: Operator<A, D>, o4: Operator<A, E>): Operator<A, [B, C, D, E]>;
export function combine<A, B, C, D, E, F>(
  o1: Operator<A, B>,
  o2: Operator<A, C>,
  o3: Operator<A, D>,
  o4: Operator<A, E>,
  o5: Operator<A, F>
): Operator<A, [B, C, D, E, F]>;
export function combine<A, B, C, D, E, F, G>(
  o1: Operator<A, B>,
  o2: Operator<A, C>,
  o3: Operator<A, D>,
  o4: Operator<A, E>,
  o5: Operator<A, F>,
  o6: Operator<A, G>
): Operator<A, [B, C, D, E, F, G]>;
export function combine(...operators: MonotypeOperator[]) {
  return (values: unknown) => operators.reduce((accumulator, operator) => accumulator.concat([operator(values)]), [] as any[]);
}
