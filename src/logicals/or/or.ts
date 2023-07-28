import { Filters } from '../../types';
import { isTrue, ɵsingleOperationReducer } from '../../utils';

const orImpl = (...values: boolean[]) => values.some(isTrue);

export const or = (...operators: Filters) => <S>(source: S) => operators
  .map((operator) => operator(source))
  .reduce(ɵsingleOperationReducer((array) => orImpl(...array))
  );
