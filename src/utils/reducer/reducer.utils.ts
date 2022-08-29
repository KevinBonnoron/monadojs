import { Operator } from '../../types';
import { haveSameProperties, haveSameTypes, isArray, isObject } from '../object/object.utils';

export const getOrCreateArrayAccumulator = <T>(previousValue: T, currentValue: T, currentIndex: number, initFn: (acc: T[], value: T) => T[] = (accumulator: T[], previous: T) => accumulator.concat(previous)) => {
  let accumulator: T[] = [];
  // If previousValue is Array and currentValue not, then we passed the accumulator
  if (isArray<T>(previousValue) && (!isArray(currentValue) || (currentIndex > 1 && !haveSameTypes(previousValue, currentValue)))) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    accumulator = initFn(accumulator, previousValue);
  }

  return accumulator;
};

export const getOrCreateObjectAccumulator = <T>(previousValue: T, currentValue: T, currentIndex: number, mapKeyFn: Operator<T, any>) => {
  let accumulator: { [key: PropertyKey]: T[] } = {};
  // If previousValue is ArrayOrMap and currentValue not, then we passed the accumulator
  if (isObject<{ [key: PropertyKey]: T[] }>(previousValue) && !haveSameProperties(previousValue, currentValue)) {
    accumulator = previousValue;
  } else if (currentIndex === 1) {
    const key = mapKeyFn(previousValue);
    if (accumulator[key] === undefined) {
      accumulator[key] = [];
    }

    accumulator[key].push(previousValue);
  }

  return accumulator;
};

export const singleOperationReducer = <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[], operation: () => any) => (currentIndex > 1 ? previousValue : operation());
