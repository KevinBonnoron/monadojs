import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const andImpl = (...values: boolean[]) => values.every((a) => a);

export const and =
  <T>(...operators: Filter<T>[]) =>
  (value: T) =>
    operators
      .map((operator) => operator(value))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => andImpl(...array))
      );
