import type { Filters, Operator } from '../../types';
import { isTrue } from '../../utils/object/is-true/is-true';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

const andImpl = (...values: boolean[]): boolean => values.every(isTrue);

export function and<S>(...operators: Filters): Operator<S, boolean> {
  return (source: S) => operators.map((operator) => operator(source)).reduce(ɵsingleOperationReducer((array) => andImpl(...array)));
}
