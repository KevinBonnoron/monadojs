import { Mapper } from '../../types';

type Entries<T> = [keyof T, any][];

// TODO handle array
export const entries =
  <T extends object>(): Mapper<T, Entries<T>> =>
  (values: T) =>
    Object.entries(values) as Entries<T>;
