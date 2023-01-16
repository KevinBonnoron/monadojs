import { isArray } from '../../utils';

export const shift =
  () =>
  <T>(value: T) =>
    isArray(value) ? value.shift() : value;
