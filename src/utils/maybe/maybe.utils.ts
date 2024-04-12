import { pipe } from '../../operators/pipe/pipe';
import type { AnyFunction, Maybe, MonotypeOperator } from '../../types';
import { isMaybe } from '../object/is-maybe/is-maybe';
import { isNil } from '../object/is-nil/is-nil';

abstract class DefaultMaybe<T> implements Maybe<T> {
  expect(error: string): T {
    if (this.isNothing) {
      throw new Error(error);
    }

    return this.value;
  }

  unwrap(): T {
    return this.expect('unwrap called on Nothing');
  }

  unwrapOr<V>(defaultValue: V): T | V {
    return this.isNothing ? defaultValue : this.value;
  }

  unwrapOrElse<V>(fn: AnyFunction<V>): T | V {
    return this.isNothing ? fn() : this.value;
  }

  pipe<O>(): Maybe<O> {
    throw new Error('Method not implemented.');
  }

  equals(value: unknown): boolean {
    throw new Error('Method not implemented.');
  }

  toString(): string {
    return '[object Maybe]';
  }

  get value(): T {
    throw new Error('Method not implemented.');
  }

  get isNothing(): boolean {
    return !this.isJust;
  }

  get isJust(): boolean {
    return !isNil(this.value);
  }

  static [Symbol.toStringTag](): string {
    return 'Maybe';
  }
}

class JustImpl<T> extends DefaultMaybe<T> {
  constructor(protected readonly _value: T) {
    super();
  }

  override pipe<O>(...operators: MonotypeOperator[]): Maybe<O> {
    return Just(pipe<T, O>(...operators)(this._value));
  }

  override equals(other: unknown): boolean {
    if (isMaybe(other)) {
      return other.isJust && other.equals(this._value);
    }

    return this._value === other;
  }

  override get value(): T {
    return this._value;
  }
}

class NothingImpl extends DefaultMaybe<null> {
  override pipe() {
    return Nothing;
  }

  override equals(other: unknown) {
    if (isMaybe(other)) {
      return other.isNothing;
    }

    return other === null || other === undefined;
  }

  override get value() {
    return null;
  }
}

export function Just<T>(value: T): Maybe<T> {
  return value === null || value === undefined ? Nothing : new JustImpl<T>(value);
}

export const Nothing: Maybe = new NothingImpl();
