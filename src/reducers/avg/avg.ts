import { MonoTypeReducer } from '../../types';
import { singleOperationReducer } from '../../utils';
import { sum } from '../sum/sum';

export const avg =
  <T extends number>(): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.reduce(sum(), 0 as T) / array.length);
