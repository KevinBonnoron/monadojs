import { Filters } from '../../types';
import { ɵsingleOperationReducer } from '../../utils';

const xorImpl = (...values: boolean[]) => values.reduce((a, b) => a !== b);

export const xor = (...operators: Filters) => <S>(source: S) => operators
  .map((operator) => operator(source))
  .reduce(ɵsingleOperationReducer((array) => xorImpl(...array))
  );
