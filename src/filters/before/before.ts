import { isString } from '../../utils';

const beforeImpl = (date: Date, beforeDate: Date) => date.getTime() < beforeDate.getTime();

export const before =
  (beforeDate: Date) => <S extends Date | string>(source: S) => isString(source) ? beforeImpl(new Date(source), beforeDate) : beforeImpl(source, beforeDate);
