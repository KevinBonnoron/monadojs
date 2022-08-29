import { Reducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const tail =
  <T>(): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(-1)[0]);
