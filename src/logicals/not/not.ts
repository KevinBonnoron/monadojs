import type { Filter, Operator } from '../../types';

export function not<S>(operator: Filter): Operator<S, boolean> {
  return (source: S): boolean => !operator(source);
}
