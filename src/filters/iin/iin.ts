import { includes } from '../includes/includes';

type Container<T> = Array<T> | Map<any, T> | Set<T>;

export const iin =
  <S>(container: Container<S>) =>
  (source: S) =>
    includes(source)(container);
