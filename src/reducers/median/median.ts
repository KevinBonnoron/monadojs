import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const median = <T extends number>() => ɵsingleOperationReducer<T>((array) => {
  if (array.length === 0) {
    return undefined;
  }

  const sortedArray = [...array].sort((a, b) => a - b);
  const half = Math.floor(sortedArray.length / 2);
  return sortedArray.length % 2 === 0 ? (sortedArray[half - 1] + sortedArray[half]) / 2 : sortedArray[half];
});
