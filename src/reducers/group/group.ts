import { Operator, Reducer } from '../../types';
import { getOrCreateObjectAccumulator, isFunction, isNil } from '../../utils';

const getKeyFn = <T>(keyFn: Operator<T, string> | keyof T) => (isFunction(keyFn) ? keyFn : (value: T) => value[keyFn]);

export const group =
  <T>(groupKey: Operator<T, string> | keyof T): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => {
    const keyFn = getKeyFn(groupKey);
    const accumulator = getOrCreateObjectAccumulator(previousValue, currentValue, currentIndex, keyFn);

    const key = keyFn(currentValue) as string;
    if (!isNil(key)) {
      if (accumulator[key] === undefined) {
        accumulator[key] = [];
      }

      accumulator[key].push(currentValue);
    }

    return accumulator;
  };
