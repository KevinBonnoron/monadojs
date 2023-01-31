import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const nandImpl = (...values: boolean[]) => !values.reduce((a, b) => a && b);

export const nand =
  <T>(...operators: Filter<T>[]) =>
  (value: T) =>
    operators
      .map((operator) => operator(value))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => nandImpl(...array))
      );
