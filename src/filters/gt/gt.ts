import { isDate } from '../../utils/object/is-date/is-date';

export const gt = <E = number | string | Date>(expected: E) => <S extends E>(source: S) => (
  isDate(source) && isDate(expected) ? source.getTime() > expected.getTime() :
  source > expected
);
