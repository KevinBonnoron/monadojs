import { Operator } from '../../types';
import { isArray } from '../../utils';

export const some =
  <T>(predicate: Operator<unknown, boolean>) =>
  (values: T[]) =>
    isArray(values) ? values.some(predicate) : predicate(values);
