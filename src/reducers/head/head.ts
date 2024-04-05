import { Reducer } from '../../types';
import { slice } from '../slice/slice';

export const head = (length = 1): Reducer => slice(0, length);
