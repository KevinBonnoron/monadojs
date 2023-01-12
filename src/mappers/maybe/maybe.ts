import { Maybe } from '../../types';
import { Just } from '../../utils';

export const maybe =
  () =>
  <T>(values: T): Maybe<T> =>
    Just(values);
