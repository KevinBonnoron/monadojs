import { isArray } from '../../utils';

export const shuffle =
  () =>
  <T>(source: T) =>
    isArray<T>(source)
      ? (source
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value) as T)
      : source;
