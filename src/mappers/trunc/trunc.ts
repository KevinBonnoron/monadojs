import { isNumber } from '../../utils';

export const trunc = () => <S>(source: S) => isNumber(source) ? Math.trunc(source) : NaN;
