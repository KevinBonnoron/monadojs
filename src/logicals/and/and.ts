import { Filters } from '../../types';
import { isTrue } from '../../utils/object/is-true/is-true';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const andImpl = (...values: boolean[]) => values.every(isTrue);

export const and = (...operators: Filters) => <S>(source: S) => operators
  .map((operator) => operator(source))
  .reduce(ɵsingleOperationReducer((array) => andImpl(...array))
  );
