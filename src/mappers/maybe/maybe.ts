import { Maybe } from '../../types';
import { Just } from '../../utils';

export const maybe =
  () =>
  <T>(source: T): Maybe<T> =>
    Just(source);
