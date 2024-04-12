import type { AnyFunction } from './any-function.type';
import type { Operator } from './operator.type';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface Maybe<T = any> {
  expect(error: string): T;
  unwrap(): T;
  unwrapOr<V>(value: V): T | V;
  unwrapOrElse<E>(fn: AnyFunction<E>): T | E;

  pipe<O>(...operators: Operator[]): Maybe<O>;
  equals(other: unknown): boolean;

  get isJust(): boolean;
  get isNothing(): boolean;
  get value(): T;
}

export interface MaybeConstructor {
  readonly [Symbol.species]: Maybe;
}

class MaybeImpl implements Maybe {
  expect() {
    /**/
  }

  unwrap() {
    /**/
  }

  unwrapOr() {
    /**/
  }

  unwrapOrElse() {
    /**/
  }

  pipe<O>() {
    return this as unknown as Maybe<O>;
  }

  equals() {
    return false;
  }

  get isJust() {
    return false;
  }

  get isNothing() {
    return false;
  }

  get value() {
    return null;
  }

  get [Symbol.species]() {
    return this;
  }
}

export const Maybe: MaybeConstructor = new MaybeImpl();
