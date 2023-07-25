import { AllTypes } from '../../types';
import { isType } from '../../utils';

export const is = <T extends AllTypes>(type: T) => <S>(source: S) => isType<T>(type)(source);
