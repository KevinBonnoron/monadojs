import type { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export function join<T extends string | number>(separator = ','): Reducer {
  return ɵsingleOperationReducer<T, string>((array: T[]) => array.join(separator));
}
