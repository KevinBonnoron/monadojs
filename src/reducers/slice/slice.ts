import type { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export function slice(start = 0, length?: number): Reducer {
  return ɵsingleOperationReducer((array) => array.slice(start, length ? start + length : array.length));
}
