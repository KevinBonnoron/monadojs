import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const orImpl = (...values: boolean[]) => values.some((a) => a);

export const or =
  <T>(...operators: Filter<T>[]) =>
  (value: T) =>
    operators
      .map((operator) => operator(value))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => orImpl(...array))
      );
