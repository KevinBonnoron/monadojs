import { Reducer } from '../../types';
import { singleOperationReducer } from '../../utils';

export const chunk =
  <T>(length: number = 2): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => {
      const result: T[][] = [];
      for (let i = 0; i < Math.ceil(array.length / length); i++) {
        result.push(array.slice(i * length, i * length + length));
      }

      return result;
    });
