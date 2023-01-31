import { Operator } from '../../types';
import { isFunction, isNil, PropertyKeyAccumulator, ɵobjectAccumulator } from '../../utils';

const appender =
  <T>(predicate: Operator<T, PropertyKey> | keyof T) =>
  (accumulator: PropertyKeyAccumulator<T>, value: T) => {
    const key = isFunction(predicate) ? predicate(value) : value[predicate];
    if (!isNil(key)) {
      if (accumulator[key] === undefined) {
        accumulator[key] = [] as T[];
      }

      (accumulator[key] as any).push(value);
    }

    return accumulator;
  };

export const group =
  <T>(predicate: Operator | keyof T) =>
  (previousValue: T | PropertyKeyAccumulator<T>, currentValue: T, currentIndex: number) =>
    ɵobjectAccumulator(previousValue, currentValue, currentIndex, appender(predicate));
