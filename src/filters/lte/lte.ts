import { isDate } from '../../utils/object/is-date/is-date';

export const lte =
  <E = number | string | Date>(expected: E) =>
  <S extends E>(source: S): boolean =>
    isDate(source) && isDate(expected) ? source.getTime() <= expected.getTime() : source <= expected;
