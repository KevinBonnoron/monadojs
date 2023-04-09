import { haveSameProperties, haveSameType, isArray, isObject } from '../object/object.utils';

export type PropertyKeyAccumulator<T> = { [P in keyof T]: T[] } & any;

/**
 * @private
 * @param previousValue
 * @param currentValue
 * @param currentIndex
 * @param appender
 * @returns
 */
export const ɵarrayAccumulator = <T>(previousValue: T, currentValue: T, currentIndex: number, appender: (accumulator: T[], value: T) => T[]) => {
  let accumulator: T[] = [];
  // If previousValue is Array and currentValue not, then we passed the accumulator
  if (isArray<T>(previousValue) && (!isArray(currentValue) || (currentIndex > 1 && !haveSameType(previousValue, currentValue)))) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    appender(accumulator, previousValue);
  }

  return appender(accumulator, currentValue);
};

/**
 * @private
 * @param previousValue
 * @param currentValue
 * @param currentIndex
 * @param appender
 * @returns
 */
export const ɵobjectAccumulator2 =
  <T, U = any>(appender: (accumulator: U, value: T) => U) =>
  (previousValue: T | U, currentValue: T, currentIndex: number, array: T[]) => {
    let accumulator: U = {} as U;
    // If previousValue is ArrayOrMap and currentValue not, then we passed the accumulator
    if (isObject<U>(previousValue) && !haveSameProperties(previousValue, currentValue)) {
      accumulator = previousValue;
    } else if (isObject<T>(previousValue) && currentIndex === 1) {
      appender(accumulator, previousValue);
    }

    return appender(accumulator, currentValue);
  };

/**
 * @private
 * @param previousValue
 * @param currentValue
 * @param currentIndex
 * @param appender
 * @returns
 */
export const ɵobjectAccumulator = <T, U = any>(
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

/**
 * Reducer callback that apply the `operation` parameter and keep it's value as the result of the reduce.
 *
 * @private
 * @param previousValue
 * @param _currentValue
 * @param currentIndex
 * @param _array
 * @param operation
 * @returns
 */
export const ɵsingleOperationReducer = <T>(previousValue: T, _currentValue: T, currentIndex: number, _array: T[], operation: () => any) =>
  currentIndex > 1 ? previousValue : operation();
