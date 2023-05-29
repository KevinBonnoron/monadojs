import { isEqual } from '../../utils';

export const eq =
  <E>(expected: E, comparisonFn: (a: any, b: E) => boolean = isEqual) => <S>(source: S) => comparisonFn(source, expected);
