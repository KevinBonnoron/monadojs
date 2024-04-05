import { Maybe } from '../../../types';
import { Just } from '../../maybe/maybe.utils';

export const toMaybe = <V = unknown>(value: V): Maybe<V> => Just(value);
