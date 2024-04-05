import { includes } from '../includes/includes';

type Container<T> = Array<T> | Map<unknown, T> | Set<T> | string;

export const iin =
  <S>(container: Container<S>) =>
  (source: S): boolean =>
    includes(source)(container);
