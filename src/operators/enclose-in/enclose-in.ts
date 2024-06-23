import type { Operator } from '../../types';
import { isFunction } from '../../utils';

export function encloseIn<P extends PropertyKey>(key: Operator | P): <S>(source: S) => Record<P, S> | { [x: number]: S } {
  return <S>(source: S) => {
    if (isFunction(key)) {
      return { [key(source)]: source };
    }

    return { [key]: source } as Record<P, S>;
  };
}
