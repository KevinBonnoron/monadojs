import { Reducer } from '../../types';
import { slice } from '../slice/slice';

export const tails = <T>(length: number = 1): Reducer<T> => slice(-length);
