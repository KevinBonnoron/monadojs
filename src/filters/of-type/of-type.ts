import { AllTypes } from '../../types';
import { isType } from '../../utils';

export const ofType =
  <T extends AllTypes>(type: T) => <S>(source: S) => isType<T>(type)(source);
