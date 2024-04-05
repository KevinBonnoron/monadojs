import { Reducer } from '../../types';
import { slice } from '../slice/slice';

export const tail = (length = 1): Reducer => slice(-length);
