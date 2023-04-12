import { includes } from '../../filters/includes/includes';
import { Operator } from '../../types/operator.type';
import { isArray, isMap, isObject, isPrimitive, isSet } from '../../utils/object';
import { entries } from '../entries/entries';
import { values } from '../values/values';

const walkImpl = <T>(value: T, operator: Operator<T, void>, context: { visitedObjects: any[] } = { visitedObjects: [] }) => {
  if (!includes(value)(context.visitedObjects)) {
    if (!isPrimitive(value)) {
      context.visitedObjects.push(value);
    }

    operator(value);

    if (isMap<any, T>(value)) {
      for (const subValue of entries()(value)) {
        walkImpl<any>(subValue, operator, context);
      }
    } else if (isObject<T>(value) || isArray<T>(value) || isSet<T>(value)) {
      for (const subValue of values()(value)) {
        walkImpl<any>(subValue, operator, context);
      }
    }
  }

  return value;
};

export const walk =
  (operator: Operator<any, void>) =>
  <S>(source: S) =>
    walkImpl(source, operator);
