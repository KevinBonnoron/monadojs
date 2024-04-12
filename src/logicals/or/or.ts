import type { Filters, Operator } from '../../types';
import { isTrue } from '../../utils/object/is-true/is-true';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const orImpl = (...values: boolean[]): boolean => values.some(isTrue);

export function or<S>(...operators: Filters): Operator<S, boolean> {
  return (source: S) => operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => orImpl(...array)));
}
