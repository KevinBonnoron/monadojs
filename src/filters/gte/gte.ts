import { isDate } from '../../utils';

export const gte = <E = number | string | Date>(expected: E) => <S extends E>(source: S) => (
  isDate(source) && isDate(expected) ? source.getTime() >= expected.getTime() :
  source >= expected
);
