import { Filter, Operator } from '../../types';
import { isFunction } from '../../utils';

export const iif =
  (operator: Filter, trueOperator: Operator, falseOperator?: Operator) =>
  <T>(value: T) =>
    operator(value)
      ? isFunction(trueOperator)
        ? trueOperator(value)
        : trueOperator
      : isFunction(falseOperator)
      ? falseOperator(value)
      : falseOperator;
