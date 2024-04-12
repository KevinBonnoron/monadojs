import type { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export function flatten<T>(depth = 1): Reducer {
  return ɵsingleOperationReducer((array: T[]) => array.flat(depth));
}
