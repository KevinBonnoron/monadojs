import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const norImpl = (...values: boolean[]) => !values.some((value) => value);

export const nor =
  <T>(...operators: Filter<T>[]) =>
  (source: T) =>
    operators
      .map((operator) => operator(source))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => norImpl(...array))
      );
