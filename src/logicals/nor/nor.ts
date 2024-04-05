import { Filters } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const norImpl = (...values: boolean[]): boolean => !values.some((value) => value);

export const nor =
  (...operators: Filters) =>
  <S>(source: S): boolean =>
    operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => norImpl(...array)));
