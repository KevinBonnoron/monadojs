import { isArray } from '../../utils';

export const pop =
  () =>
  <T>(source: T) =>
    isArray(source) ? source.pop() : source;
