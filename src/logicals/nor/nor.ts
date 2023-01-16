import { Filter } from '../../types';
import { singleOperationReducer } from '../../utils';

const norImpl = (...values: boolean[]) => !values.some((value) => value);

export const nor =
  <T>(...operators: Filter<T>[]) =>
  (value: T) =>
    operators
      .map((operator) => operator(value))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        singleOperationReducer(previousValue, currentValue, currentIndex, array, () => norImpl(...array))
      );
