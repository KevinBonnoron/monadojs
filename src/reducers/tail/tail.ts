import type { Reducer } from '../../types';
import { slice } from '../slice/slice';

export function tail(length = 1): Reducer {
  return slice(-length);
}
