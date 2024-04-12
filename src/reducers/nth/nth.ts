import type { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export function nth<T>(nth: number): Reducer {
  return ɵsingleOperationReducer((array: T[]) => array.at(nth));
}
