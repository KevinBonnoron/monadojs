import { Operator } from '../../types';

/**
 * Call all operators one after the other combining the result of all
 * @param operators
 * @returns
 */
export const combine =
  <T>(...operators: Operator[]): Operator =>
  (values: T | T[]) =>
    operators.reduce((accumulator, operator) => accumulator.concat([operator(values)]), [] as any[]);
