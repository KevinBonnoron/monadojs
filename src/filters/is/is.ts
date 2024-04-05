import { AllTypes } from '../../types';
import { isType } from '../../utils/object/is-type/is-type';

export const is = <T extends AllTypes>(type: T): ((value: unknown) => value is T) => isType<T>(type);
