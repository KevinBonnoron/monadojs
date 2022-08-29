import { Reducer } from '../../types';
import { getOrCreateArrayAccumulator } from '../../utils';

const split = <T>(accumulator: T[][], values: T[]) => {
  for (let i = 0; i < values.length; i++) {
    if (accumulator[i] === undefined) {
      accumulator[i] = [];
    }

    accumulator[i].push(values[i]);
  }

  return accumulator;
};

export const zip =
  <T>(): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number) => {
    const accumulator = getOrCreateArrayAccumulator<T[]>(previousValue as unknown as T[], currentValue as unknown as T[], currentIndex, split);
    return split(accumulator, currentValue as unknown as T[]);
  };
