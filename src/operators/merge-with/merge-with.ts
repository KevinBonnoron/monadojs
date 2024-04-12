import type { Operator } from '../../types';
import { merge } from '../../utils';

export function mergeWith<S, V>(...sources: V[]): Operator<S, S & V> {
  return (source: S, customizeFn?: (o1: S | V, o2: S | V) => undefined | (V & S)) =>
    sources.reduce((previous, current) => {
      if (customizeFn) {
        const result = customizeFn(previous, current);
        if (result) {
          return result;
        }
      }

      return merge(previous, current);
    }, source) as S & V;
}
