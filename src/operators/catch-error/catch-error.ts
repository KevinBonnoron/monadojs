import { Operator } from '../../types';
import { isFunction } from '../../utils/object/is-function/is-function';
import { isNil } from '../../utils/object/is-nil/is-nil';

const CATCH_ERROR_SYMBOL = Symbol('CATCH_ERROR');

export const catchError = (callback: Operator): ((e: unknown) => ReturnType<typeof callback>) => {
  function impl(e: unknown) {
    return callback(e);
  }

  impl.prototype[CATCH_ERROR_SYMBOL] = true;
  return impl;
};

export const ɵisCatchOperator = (value: unknown): value is ReturnType<typeof catchError> => isFunction(value) && !isNil(value.prototype) && value.prototype[CATCH_ERROR_SYMBOL];
