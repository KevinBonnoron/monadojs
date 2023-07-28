import { AllTypes } from '../../types';
import { isType } from '../../utils';

export const is = <T extends AllTypes>(type: T) => isType<T>(type);
