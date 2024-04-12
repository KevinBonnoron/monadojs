import type { Operator } from '../../types';
import { isDate } from '../../utils/object/is-date/is-date';

export function lt<E = number | string | Date>(expected: E): Operator<E, boolean> {
  return <S extends E>(source: S): boolean => (isDate(source) && isDate(expected) ? source.getTime() < expected.getTime() : source < expected);
}
