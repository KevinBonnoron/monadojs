import { isArray } from '../../utils';

export const shuffle =
  () =>
  <T>(values: T) =>
    isArray<T>(values)
      ? (values
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value) as T)
      : values;
