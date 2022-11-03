import { MonoTypeReducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const last =
  <T>(): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(-1)[0]);
