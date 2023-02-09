import { includes } from '../includes/includes';

type Container<T> = Array<T> | Map<any, T> | Set<T>;

export const iin =
  <T>(container: Container<T>) =>
  (source: T) =>
    includes(source)(container);
