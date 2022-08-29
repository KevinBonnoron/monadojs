import { Operator } from '../../types';

/**
 * Call all operators one after the other using the previous result as next operator input
 * @param operators
 * @returns
 */
export const compose =
  <T>(...operators: Operator[]): Operator =>
  (values: T | T[]) =>
    operators.reduce((value, operator) => operator(value), values);
