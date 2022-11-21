import { Filter, Operator } from '../../types';
import { isFunction } from '../../utils';

export const iif =
  (operator: Filter, trueOperator: Operator, falseOperator?: Operator) =>
  <T>(values: T) =>
    operator(values) ? (isFunction(trueOperator) ? trueOperator(values) : trueOperator) : isFunction(falseOperator) ? falseOperator(values) : falseOperator;
