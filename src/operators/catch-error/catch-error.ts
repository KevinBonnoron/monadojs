import { Operator } from '../../types';
import { isFunction, isNil } from '../../utils/object';

const CATCH_ERROR_SYMBOL = Symbol('CATCH_ERROR');

export const catchError = (callback: Operator) => {
  const impl = function (e: unknown) {
    return callback(e);
  };

  impl.prototype[CATCH_ERROR_SYMBOL] = true;
  return impl;
};

export const ɵisCatchOperator = (value: unknown): value is ReturnType<typeof catchError> =>
  isFunction(value) && !isNil(value.prototype) && value.prototype[CATCH_ERROR_SYMBOL];
