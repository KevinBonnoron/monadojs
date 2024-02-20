import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const chunk = <T>(length = 2) =>
  ɵsingleOperationReducer<T>((array) => {
    const result: T[][] = [];
    for (let i = 0; i < Math.ceil(array.length / length); i++) {
      result.push(array.slice(i * length, i * length + length));
    }

    return result;
  });
