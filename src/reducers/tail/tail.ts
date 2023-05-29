import { slice } from '../slice/slice';

export const tail = (length = 1) => slice(-length);
