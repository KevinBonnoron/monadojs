import { Filters } from '../../types';
import { isTrue } from '../../utils/object/is-true/is-true';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const orImpl = (...values: boolean[]) => values.some(isTrue);

export const or =
  (...operators: Filters) =>
  <S>(source: S) =>
    operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => orImpl(...array)));
