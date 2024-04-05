import { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const median = (): Reducer =>
  ɵsingleOperationReducer((array: number[]): number => {
    if (array.length === 0) {
      return 0;
    }

    const sortedArray = [...array].sort((a, b) => a - b);
    const half = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 === 0 ? (sortedArray[half - 1] + sortedArray[half]) / 2 : sortedArray[half];
  });
