import type { Reducer } from '../../types';
import { slice } from '../slice/slice';

export function head(length = 1): Reducer {
  return slice(0, length);
}
