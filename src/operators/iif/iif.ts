import { Filter, Operator } from '../../types';
import { isFunction } from '../../utils';

export const iif =
  <T, F>(operator: Filter, trueOperator: T | Operator, falseOperator?: F | Operator) =>
  <S>(source: S) =>
    operator(source)
      ? isFunction(trueOperator)
        ? trueOperator(source)
        : trueOperator
      : isFunction(falseOperator)
      ? falseOperator(source)
      : falseOperator;
