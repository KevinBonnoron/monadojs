import type { Collection, Operator } from '../../types';
import { includes } from '../includes/includes';

type Container<T> = Collection<T> | string;

export function iin<S>(container: Container<S>): Operator<S, boolean> {
  return (source: S) => includes(source)(container);
}
