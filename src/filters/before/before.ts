import type { Operator } from '../../types';
import { isString } from '../../utils/object/is-string/is-string';

const beforeImpl = (date: Date, beforeDate: Date): boolean => date.getTime() < beforeDate.getTime();

export function before<I extends Date | string>(beforeDate: Date): Operator<I, boolean> {
  return <S extends I>(source: S) => (isString(source) ? beforeImpl(new Date(source), beforeDate) : beforeImpl(source, beforeDate));
}
