import type { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export function sample<T>(): Reducer<T> {
  return ɵsingleOperationReducer((array: T[]) => array[Math.floor(Math.random() * array.length)]);
}
