import { MonoTypeReducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const join =
  <T>(separator: string = ','): MonoTypeReducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.join(separator));
