import { Reducer } from '../../types';
import { slice } from '../slice/slice';

export const heads = <T>(length: number = 1): Reducer<T> => slice(0, length);
