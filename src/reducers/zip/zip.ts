import { Reducer } from '../../types';
import { ɵarrayAccumulator } from '../../utils';

type Matrix<T> = T[][];

const zipImpl = <T>(accumulator: Matrix<T>, value: T[]): Matrix<T> => {
  for (let i = 0; i < value.length; i++) {
    if (accumulator[i] === undefined) {
      accumulator[i] = [];
    }

    accumulator[i].push(value[i]);
  }

  return accumulator;
};

export const zip = <T>(): Reducer<T[]> => ɵarrayAccumulator<T[]>(zipImpl);
