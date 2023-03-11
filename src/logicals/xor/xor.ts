import { Filter } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const xorImpl = (...values: boolean[]) => values.reduce((a, b) => a !== b);

export const xor =
  <S>(...operators: Filter<S>[]) =>
  (source: S) =>
    operators
      .map((operator) => operator(source))
      .reduce((previousValue, currentValue, currentIndex, array) =>
        ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => xorImpl(...array))
      );
