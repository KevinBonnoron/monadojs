import { isEqual } from '../../utils';

export const eq =
  <E>(expected: E, comparisonFn: (a: any, b: any) => boolean = isEqual) =>
  <S>(source: S) =>
    comparisonFn(source, expected);
