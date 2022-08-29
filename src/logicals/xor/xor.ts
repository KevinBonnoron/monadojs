import { Operator } from '../../types';
import { singleOperationReducer } from '../../utils';

const xorImpl = (...values: boolean[]) => values.reduce((a, b) => a !== b);

export const xor =
  <T>(...operators: Operator[]): Operator =>
  (value: T) =>
    operators
      .map((operator) => operator(value))
      .reduce((previousValue, currentValue, currentIndex, array) => singleOperationReducer(previousValue, currentValue, currentIndex, array, () => xorImpl(...array)));
