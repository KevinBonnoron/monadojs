import { isMaybe, isNil } from '../utils';
import { AnyFunction } from './any-function.type';
import { Operator } from './operator.type';

export const matchJust = (value: unknown) => (isMaybe(value) ? value.isJust : !isNil(value));
export const matchNothing = (value: unknown) => (isMaybe(value) ? value.isNothing : isNil(value));

export interface Maybe<T = any> {
  expect(error: string): T;
  unwrap(): T;
  unwrapOr<V>(value: V): T | V;
  unwrapOrElse<E>(fn: AnyFunction<E>): T | E;

  pipe<O>(...operators: Operator[]): Maybe<O>;
  equals(value: unknown): boolean;

  get isJust(): boolean;
  get isNothing(): boolean;
  get value(): T;
}
