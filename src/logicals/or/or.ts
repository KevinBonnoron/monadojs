import { Filter } from '../../types';
import { singleOperationReducer } from '../../utils';

const orImpl = (...values: boolean[]) => values.some((a) => a);

export const or =
  <T>(...operators: Filter<T>[]) =>
  (value: T) =>
    operators.map((operator) => operator(value)).reduce((previousValue, currentValue, currentIndex, array) => singleOperationReducer(previousValue, currentValue, currentIndex, array, () => orImpl(...array)));
