import type { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export function chunk<T>(length = 2): Reducer {
  return ɵsingleOperationReducer((array: T[]) => {
    const result: T[][] = [];
    for (let i = 0; i < Math.ceil(array.length / length); i++) {
      result.push(array.slice(i * length, i * length + length));
    }

    return result;
  });
}
