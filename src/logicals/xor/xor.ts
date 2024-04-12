import type { Filters, Operator } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const xorImpl = (...values: boolean[]): boolean => values.reduce((a, b) => a !== b);

export function xor<S>(...operators: Filters): Operator<S, boolean> {
  return (source: S): boolean => operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => xorImpl(...array)));
}
