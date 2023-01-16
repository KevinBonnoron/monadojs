import { isArray } from '../../utils';

export const shuffle =
  () =>
  <T>(value: T) =>
    isArray<T>(value)
      ? (value
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value) as T)
      : value;
