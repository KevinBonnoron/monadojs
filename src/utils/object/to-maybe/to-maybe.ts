import { Just } from '../../maybe/maybe.utils';

export const toMaybe = <V = unknown>(value: V) => Just(value);
