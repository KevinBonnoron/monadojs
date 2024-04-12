import type { Operator } from '../../types';
import { isEqual } from '../../utils/object/is-equal/is-equal';

export function eq<E, I>(expected: E, comparisonFn: (a: unknown, b: E) => boolean = isEqual): Operator<I, boolean> {
  return <S extends I>(source: S): boolean => comparisonFn(source, expected);
}
