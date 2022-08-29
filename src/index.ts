import { Operator } from './types';

export * from './public_api';

declare global {
  interface Array<T> {
    pipe<I, O>(...operators: Operator<I, O>[]): unknown;
  }

  interface Object {
    pipe<I, O>(...operators: Operator<I, O>[]): unknown;
  }
}

function pipeFn(this: any, ...operators: Operator[]) {
  return operators.reduce((value, operator) => operator(value), typeof this === 'object' ? this : this.slice());
}

Array.prototype.pipe = pipeFn;
Object.prototype.pipe = pipeFn;
