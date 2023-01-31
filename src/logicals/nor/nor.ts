import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const norImpl = (...values: boolean[]) => !values.some((value) => value);

export const nor =
  <T>(...operators: Filter<T>[]) =>
  (value: T) =>
    operators
      .map((operator) => operator(value))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => norImpl(...array))
      );
