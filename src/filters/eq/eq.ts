import { isEqual } from '../../utils/object/is-equal/is-equal';

export const eq =
  <E>(expected: E, comparisonFn: (a: any, b: E) => boolean = isEqual) => <S>(source: S) => comparisonFn(source, expected);
