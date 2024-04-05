import { Filters } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const xorImpl = (...values: boolean[]): boolean => values.reduce((a, b) => a !== b);

export const xor =
  (...operators: Filters) =>
  <S>(source: S): boolean =>
    operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => xorImpl(...array)));
