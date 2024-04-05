import { Filters } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const nandImpl = (...values: boolean[]): boolean => !values.reduce((a, b) => a && b);

export const nand =
  (...operators: Filters) =>
  <S>(source: S): boolean =>
    operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => nandImpl(...array)));
