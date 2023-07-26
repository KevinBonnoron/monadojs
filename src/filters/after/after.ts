import { isString } from '../../utils';

const afterImpl = (date: Date, afterDate: Date) => date.getTime() > afterDate.getTime();

export const after = (afterDate: Date) => <S extends Date | string>(source: S) => isString(source) ? afterImpl(new Date(source), afterDate) : afterImpl(source, afterDate);
