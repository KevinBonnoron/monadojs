import type { Operator } from '../../types';
import { isString } from '../../utils/object/is-string/is-string';

const afterImpl = (date: Date, afterDate: Date): boolean => date.getTime() > afterDate.getTime();

export function after<I extends Date | string>(afterDate: Date): Operator<I, boolean> {
  return <S extends I>(source: S) => (isString(source) ? afterImpl(new Date(source), afterDate) : afterImpl(source, afterDate));
}
