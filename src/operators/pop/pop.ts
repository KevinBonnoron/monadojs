import { isArray } from '../../utils';

export const pop =
  () =>
  <T>(value: T) =>
    isArray(value) ? value.pop() : value;
