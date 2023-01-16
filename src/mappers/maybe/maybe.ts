import { Maybe } from '../../types';
import { Just } from '../../utils';

export const maybe =
  () =>
  <T>(value: T): Maybe<T> =>
    Just(value);
