import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const orImpl = (...values: boolean[]) => values.some((a) => a);

export const or =
  <T>(...operators: Filter<T>[]) =>
  (source: T) =>
    operators
      .map((operator) => operator(source))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => orImpl(...array))
      );
