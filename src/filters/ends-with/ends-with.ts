import { isString } from '../../utils/object/is-string/is-string';

export const endsWith =
  (expected: string) => <S>(source: S): boolean => isString(source) ? source.endsWith(expected) : false;
