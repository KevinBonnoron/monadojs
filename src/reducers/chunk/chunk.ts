import { ɵsingleOperationReducer } from '../../utils';

export const chunk =
  (length: number = 2) =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => {
      const result: T[][] = [];
      for (let i = 0; i < Math.ceil(array.length / length); i++) {
        result.push(array.slice(i * length, i * length + length));
      }

      return result;
    });
