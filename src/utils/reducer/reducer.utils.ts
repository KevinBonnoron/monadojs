import { Reducer } from '../../types';
import { haveSamePropertyNames, haveSameType, isArray, isObject } from '../object';

export type PropertyKeyAccumulator<T> = Record<PropertyKey, T[]>;

/**
 * @private
 * @param appender
 * @returns
 */
export const ɵarrayAccumulator =
  <T>(appender: (accumulator: T[], value: T) => T[]): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number): T[] => {
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
export const ɵobjectAccumulator = <T, U extends PropertyKeyAccumulator<T>, K extends PropertyKey>(keyGeneratorFn: (value: T) => K): Reducer<T> => {
  const appender = (accumulator: PropertyKeyAccumulator<T>, value: T) => {
    const key = keyGeneratorFn(value);
    if (accumulator[key] === undefined) {
      accumulator[key] = [];
    }

    accumulator[key].push(value);
    return accumulator;
  };

  return (previousValue: T | U, currentValue: T, currentIndex: number) => {
    let accumulator: U = {} as U;
    // If previousValue is Object and currentValue not, then we passed the accumulator
    if (isObject<U>(previousValue) && !haveSamePropertyNames(previousValue, currentValue)) {
      accumulator = previousValue;
    } else if (isObject<T>(previousValue) && currentIndex === 1) {
      appender(accumulator, previousValue);
    }

    return appender(accumulator, currentValue);
  };
};

/**
 * Reducer callback that apply the `operation` parameter and keep it's value as the result of the reduce.
 *
 * @private
 * @param operation
 * @returns
 */
export const ɵsingleOperationReducer =
  <T, R>(operation: (array: T[]) => R) =>
  (previousValue: T | R, _currentValue: T, currentIndex: number, array: T[]): T | R =>
    currentIndex > 1 ? previousValue : operation(array);

/**
 *
 * @param conditionReducer
 * @param reducer
 * @returns
 */
export const ɵbreakableReducer = <T>(conditionReducer: Reducer<T, boolean>, reducer: Reducer<T>): Reducer<T> => {
  let broke = false;

  return (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => {
    if (broke) {
      return previousValue;
    }

    if (conditionReducer(previousValue, currentValue, currentIndex, array)) {
      broke = true;
      return previousValue;
    }

    return reducer(previousValue, currentValue, currentIndex, array);
  };
};
