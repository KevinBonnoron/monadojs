import type { Filters, Operator } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const nandImpl = (...values: boolean[]): boolean => !values.reduce((a, b) => a && b);

export function nand<S>(...operators: Filters): Operator<S, boolean> {
  return (source: S) => operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => nandImpl(...array)));
}
