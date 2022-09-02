import { Reducer } from '../../types';
import { arrayAccumulator } from '../../utils';

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
  <T>(): Reducer<T[]> =>
  (previousValue: T[], currentValue: T[], currentIndex: number) =>
    arrayAccumulator<T[]>(previousValue, currentValue, currentIndex, split);
