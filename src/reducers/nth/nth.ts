import { MonoTypeReducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const nth =
  <T>(nth: number): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(nth)[0]);
