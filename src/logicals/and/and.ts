import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const andImpl = (...values: boolean[]) => values.every((a) => a);

export const and =
  <S>(...operators: Filter<S>[]) =>
  (source: S) =>
    operators
      .map((operator) => operator(source))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => andImpl(...array))
      );
