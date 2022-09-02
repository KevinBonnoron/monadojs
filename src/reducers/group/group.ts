import { Operator, Reducer } from '../../types';
import { isFunction, isNil, objectAccumulator } from '../../utils';

const appender =
  <T>(groupKey: Operator<T, string> | keyof T) =>
  (accumulator: { [key: PropertyKey]: T[] }, value: T) => {
    const key: string = (isFunction(groupKey) ? groupKey(value) : value[groupKey]) as string;
    if (!isNil(key)) {
      if (accumulator[key] === undefined) {
        accumulator[key] = [];
      }

      accumulator[key].push(value);
    }

    return accumulator;
  };

export const group =
  <T>(groupKey: Operator<T, string> | keyof T): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number) =>
    objectAccumulator(previousValue, currentValue, currentIndex, appender(groupKey));
