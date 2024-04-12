import type { Operator } from '../../types';
import { isString } from '../../utils/object/is-string/is-string';

export function endsWith<I>(expected: string): Operator<I, boolean> {
  return <S extends I>(source: S) => (isString(source) ? source.endsWith(expected) : false);
}
