import { Filter, Operator } from '../../types';
import { isFunction } from '../../utils';

export const iif =
  (operator: Filter, trueOperator: Operator, falseOperator?: Operator) =>
  <T>(source: T) =>
    operator(source)
      ? isFunction(trueOperator)
        ? trueOperator(source)
        : trueOperator
      : isFunction(falseOperator)
      ? falseOperator(source)
      : falseOperator;
