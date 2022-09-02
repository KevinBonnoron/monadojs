import { eq } from '../../filters/eq/eq';
import { Reducer } from '../../types';
import { arrayAccumulator, uncurry } from '../../utils';

const appender =
  <T>(compareFn: (a: T, b: T) => boolean) =>
  (accumulator: T[], value: T) => {
    if (!accumulator.some((val) => compareFn(val, value))) {
      accumulator.push(value);
    }

    return accumulator;
  };

export const unique =
  <T>(compareFn: (a: T, b: T) => boolean = uncurry(eq)): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number) =>
    arrayAccumulator(previousValue, currentValue, currentIndex, appender(compareFn));
