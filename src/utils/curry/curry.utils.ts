import { getFunctionParameterCount, isFunction } from '../object/object.utils';

type Curry<T> = (arg: T) => Curry<T> | any;

// TODO implement
export const curry =
  (fn: (...args: any) => any, ...values: any) =>
  (...next: any) => {
    if (next.length === 0) {
      next = [undefined];
    }

    return values.length + next.length < getFunctionParameterCount(fn) ? curry(fn, ...values, ...next) : fn(...values, ...next);
  };

export const uncurry = <T>(fn: Curry<T>) => {
  return (...args: any[]) => {
    let current = fn;
    for (const arg of [...args]) {
      if (isFunction(current)) {
        current = current(arg);
      }
    }

    return current as unknown as T;
  };
};
