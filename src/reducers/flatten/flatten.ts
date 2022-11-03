import { MonoTypeReducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const flatten =
  <T>(depth: number = 1): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.flat(depth));
