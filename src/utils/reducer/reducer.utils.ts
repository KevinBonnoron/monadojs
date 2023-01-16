import { haveSameProperties, haveSameType, isArray, isObject } from '../object/object.utils';

export type PropertyKeyAccumulator<T> = { [P in keyof T]: T[] } & any;

export const arrayAccumulator = <T>(previousValue: T, currentValue: T, currentIndex: number, appender: (accumulator: T[], value: T) => T[]) => {
  let accumulator: T[] = [];
  // If previousValue is Array and currentValue not, then we passed the accumulator
  if (isArray<T>(previousValue) && (!isArray(currentValue) || (currentIndex > 1 && !haveSameType(previousValue, currentValue)))) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    appender(accumulator, previousValue);
  }

  return appender(accumulator, currentValue);
};

export const objectAccumulator = <T, U = any>(
  previousValue: T | U,
  currentValue: T,
  currentIndex: number,
  appender: (accumulator: U, value: T) => U
) => {
  let accumulator: U = {} as U;
  // If previousValue is ArrayOrMap and currentValue not, then we passed the accumulator
  if (isObject<U>(previousValue) && !haveSameProperties(previousValue, currentValue)) {
    accumulator = previousValue;
  } else if (isObject<T>(previousValue) && currentIndex === 1) {
    appender(accumulator, previousValue);
  }

  return appender(accumulator, currentValue);
};

export const singleOperationReducer = <T>(previousValue: T, _currentValue: T, currentIndex: number, _array: T[], operation: () => any) =>
  currentIndex > 1 ? previousValue : operation();
