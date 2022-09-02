import { Operator } from '../../types';
import { singleOperationReducer } from '../../utils';

const nandImpl = (...values: boolean[]) => !values.reduce((a, b) => a && b);

export const nand =
  <V>(...operators: Operator[]): Operator =>
  (value: V) =>
    operators.map((operator) => operator(value)).reduce((previousValue, currentValue, currentIndex, array) => singleOperationReducer(previousValue, currentValue, currentIndex, array, () => nandImpl(...array)));
