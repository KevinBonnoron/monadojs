import { MonotypeOperator } from '../../types';
import { isArray, isObject, isPrimitive } from '../../utils';
import { values } from '../values/values';

const walkImpl = <T extends object>(value: T, operator: MonotypeOperator<T>, context: { visitedObjects: any[] } = { visitedObjects: [] }): T => {
  context.visitedObjects.push(value);
  if (isPrimitive(value)) {
    return operator(value);
  }

  if (isObject<T>(value)) {
    for (const subValue of values<T>()(value)) {
      if (context.visitedObjects.includes(subValue)) {
        continue;
      }

      walkImpl(subValue, operator as MonotypeOperator<typeof subValue>, context);
    }
  }

  if (isArray(value)) {
    for (const subValue of value) {
      walkImpl(subValue as object, operator as MonotypeOperator<any>, context);
    }
  }

  return value;
};

export const walk =
  <T extends object>(operator: MonotypeOperator<T>) =>
  (value: T): T =>
    walkImpl(value, operator);
