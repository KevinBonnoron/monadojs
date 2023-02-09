import { isEqual } from '../../utils';

export const eq =
  <E>(expected: E, comparisonFn: (a: any, b: any) => boolean = isEqual) =>
  <T>(source: T) =>
    comparisonFn(source, expected);
