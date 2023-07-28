import { not } from '../../logicals';
import { MonotypeOperator, Operator } from '../../types';
import { ɵisCatchOperator } from '../catch-error/catch-error';

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
export function combine<A, B>(...operators: MonotypeOperator[]): Operator<A, B>;
export function combine(...operators: MonotypeOperator[]) {
  const catchOperator = operators.find(ɵisCatchOperator);
  const realOperators = operators.slice().filter(not(ɵisCatchOperator));
  return (source: unknown) => {
    if (realOperators.length === 0) {
      return source;
    }

    return realOperators.reduce((accumulator, operator, _, array) => {
      try {
        return accumulator.concat([operator(source)]);
      } catch (e) {
        // Early eject reducer
        array.splice(1);
        if (catchOperator) {
          return catchOperator(e);
        }

        throw e;
      }
    }, [] as unknown[]);
  };
}
