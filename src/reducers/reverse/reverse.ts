import { Reducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const reverse =
  <T>(): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.reverse());
