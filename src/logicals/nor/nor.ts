import type { Filters, Operator } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const norImpl = (...values: boolean[]): boolean => !values.some((value) => value);

export function nor<S>(...operators: Filters): Operator<S, boolean> {
  return (source: S) => operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => norImpl(...array)));
}
