import { slice } from '../slice/slice';

export const tail = (length: number = 1) => slice(-length);
