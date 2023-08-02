import { Reducer } from '../../types';
import { haveSamePropertyNames, haveSameType, isArray, isObject } from '../object';

export type PropertyKeyAccumulator<T> = { [P in keyof T]: T[] } & any;

/**
 * @private
 * @param appender
 * @returns
 */
export const ɵarrayAccumulator = <T>(appender: (accumulator: T[], value: T) => T[]) => (previousValue: T, currentValue: T, currentIndex: number) => {
  let accumulator: T[] = [];
  // If previousValue is an Array and currentValue is not, then previousValue is the accumulator
  if (isArray<T>(previousValue) && (!isArray(currentValue) || (currentIndex > 1 && !haveSameType(previousValue, currentValue)))) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    appender(accumulator, previousValue);
  }

  return appender(accumulator, currentValue);
};

/**
 * @private
 * @param appender
 * @returns
 */
export const ɵobjectAccumulator = <T, U extends Record<PropertyKey, T[]>>(keyGeneratorFn: (value: T) => PropertyKey) => {
  const appender = (accumulator: U, value: T) => {
    const key = keyGeneratorFn(value) as keyof typeof accumulator;
    if (accumulator[key] === undefined) {
      accumulator[key] = [] as any;
    }

    accumulator[key].push(value);
    return accumulator;
  }

  return (previousValue: T | U, currentValue: T, currentIndex: number) => {
    let accumulator: U = {} as U;
    // If previousValue is Object and currentValue not, then we passed the accumulator
    if (isObject<U>(previousValue) && !haveSamePropertyNames(previousValue, currentValue)) {
      accumulator = previousValue;
    } else if (isObject<T>(previousValue) && currentIndex === 1) {
      appender(accumulator, previousValue);
    }

    return appender(accumulator, currentValue);
  }
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
export const ɵsingleOperationReducer = <T>(operation: (array: T[]) => any) => (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => currentIndex > 1 ? previousValue : operation(array);

export const ɵbreakableReducer = <T>(conditionFn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => boolean, reducer: Reducer) => {
  let broke = false;

  return (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => {
    if (broke) {
      return previousValue
    }

    if (conditionFn(previousValue, currentValue, currentIndex, array)) {
      broke = true;
      return previousValue;
    }

    return reducer(previousValue, currentValue, currentIndex, array);
  }
}
