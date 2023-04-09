import { isString } from '../../utils';

export const endsWith =
  <E>(expected: E) =>
  <S>(source: S): boolean =>
    isString(source) ? source.endsWith(expected as string) : false;
