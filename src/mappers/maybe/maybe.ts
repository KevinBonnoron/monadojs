import { Maybe } from '../../types';
import { Just } from '../../utils';

export const maybe =
  () => <S>(source: S): Maybe<S> => Just(source);
