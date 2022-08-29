import { eq } from '../../filters/eq/eq';
import { Reducer } from '../../types';
import { getOrCreateArrayAccumulator, uncurry } from '../../utils';

export const unique =
  <T>(compareFn: (a: T, b: T) => boolean = uncurry(eq)): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number) => {
    const accumulator: T[] = getOrCreateArrayAccumulator(previousValue, currentValue, currentIndex);

    if (!accumulator.some((value) => compareFn(currentValue, value))) {
      accumulator.push(currentValue);
    }

    return accumulator;
  };
