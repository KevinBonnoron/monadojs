import { Filter, Operator } from '../../types';
import { isFunction } from '../../utils';

export const iif =
  <V, T, F>(operator: Filter<V>, trueOperator: Operator<V, T>, falseOperator?: Operator<V, F>) =>
  (values: V) =>
    operator(values) ? (isFunction(trueOperator) ? trueOperator(values) : trueOperator) : isFunction(falseOperator) ? falseOperator(values) : falseOperator;
