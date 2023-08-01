import { AllTypes } from '../../types';
import { isType } from '../../utils/object/is-type/is-type';

export const is = <T extends AllTypes>(type: T) => isType<T>(type);
