import { MonoTypeReducer } from '../../types';
import { slice } from '../slice/slice';

export const tail = <T>(length: number = 1): MonoTypeReducer<T> => slice(-length);
