import { MonotypeOperator } from '../../types';
import { isArray, isObject, isPrimitive } from '../../utils';
import { values } from '../values/values';

const walkImpl = <T extends object>(value: T, operator: MonotypeOperator<T>): T => {
  if (isPrimitive(value)) {
    operator(value);
  }

  if (isObject<T>(value)) {
    for (const subValue of values<T>()(value)) {
      walkImpl(subValue, operator as MonotypeOperator<typeof subValue>);
    }
  }

  if (isArray(value)) {
    for (const subValue of value) {
      walkImpl(subValue as object, operator as MonotypeOperator<any>);
    }
  }

  return value;
};

export const walk =
  <T extends object>(operator: MonotypeOperator<T>) =>
  (value: T | T[]): T =>
    isArray<T>(value) ? (value.map(walk(operator)) as T) : walkImpl(value, operator);
