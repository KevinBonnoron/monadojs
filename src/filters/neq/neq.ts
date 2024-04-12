import { not } from '../../logicals/not/not';
import type { Operator } from '../../types';
import { isEqual } from '../../utils/object/is-equal/is-equal';
import { eq } from '../eq/eq';

export function neq<T>(unexpected: T, comparisonFn: <A, B>(a: A, b: B) => boolean = isEqual): Operator<unknown, boolean> {
  return not(eq(unexpected, comparisonFn));
}
