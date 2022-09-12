import { Filter, Operator } from '../../types';
import { isFunction } from '../../utils';

export const iif =
  <T>(operator: Operator<T | T[], boolean> | Filter<T | T[]>, trueOperator: Operator | any, falseOperator?: Operator | any) =>
  (values: T | T[]) =>
    operator(values) ? (isFunction(trueOperator) ? trueOperator(values) : trueOperator) : isFunction(falseOperator) ? falseOperator(values) : falseOperator;
