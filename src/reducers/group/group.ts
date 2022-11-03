import { Operator, Reducer } from '../../types';
import { isFunction, isNil, objectAccumulator, PropertyKeyAccumulator } from '../../utils';

const appender =
  <T>(predicate: Operator<T, PropertyKey> | keyof T) =>
  (accumulator: PropertyKeyAccumulator<T>, value: T) => {
    const key: string = (isFunction(predicate) ? predicate(value) : value[predicate]) as string;
    if (!isNil(key)) {
      if (accumulator[key] === undefined) {
        accumulator[key] = [];
      }

      accumulator[key].push(value);
    }

    return accumulator;
  };

export const group =
  <T>(predicate: Operator<T, PropertyKey> | keyof T): Reducer<T, PropertyKeyAccumulator<T>> =>
  (previousValue: T, currentValue: T, currentIndex: number) =>
    objectAccumulator(previousValue, currentValue, currentIndex, appender(predicate));
