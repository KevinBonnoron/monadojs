import { isArray } from '../../utils';

export const shift =
  () =>
  <T>(source: T) =>
    isArray(source) ? source.shift() : source;
