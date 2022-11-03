import { MonoTypeReducer } from '../../types';
import { slice } from '../slice/slice';

export const head = <T>(length: number = 1): MonoTypeReducer<T> => slice(0, length);
