import { haveSameProperties, haveSameTypes, isArray, isObject } from '../object/object.utils';

export type PropertyKeyAccumulator<T> = { [key: PropertyKey]: T[] };

export const arrayAccumulator = <T>(previousValue: T, currentValue: T, currentIndex: number, appender: (accumulator: T[], value: T) => T[]) => {
  let accumulator: T[] = [];
  // If previousValue is Array and currentValue not, then we passed the accumulator
  if (isArray<T>(previousValue) && (!isArray(currentValue) || (currentIndex > 1 && !haveSameTypes(previousValue, currentValue)))) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    appender(accumulator, previousValue);
  }

  return appender(accumulator, currentValue);
};

export const objectAccumulator = <T>(previousValue: T, currentValue: T, currentIndex: number, appender: (accumulator: PropertyKeyAccumulator<T>, value: T) => PropertyKeyAccumulator<T>) => {
  let accumulator: PropertyKeyAccumulator<T> = {};
  // If previousValue is ArrayOrMap and currentValue not, then we passed the accumulator
  if (isObject<PropertyKeyAccumulator<T>>(previousValue) && !haveSameProperties(previousValue, currentValue)) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    appender(accumulator, previousValue);
  }

  return appender(accumulator, currentValue);
};

export const singleOperationReducer = <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[], operation: () => any) => (currentIndex > 1 ? previousValue : operation());
