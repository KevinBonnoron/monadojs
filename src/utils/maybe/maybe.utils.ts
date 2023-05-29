import { pipe } from '../../operators/pipe/pipe';
import { AnyFunction, Maybe, MonotypeOperator } from '../../types';
import { isMaybe, isNil } from '../object';

abstract class DefaultMaybe<T> implements Maybe<T> {
  expect(error: string) {
    if (this.isNothing) {
      throw new Error(error);
    }

    return this.value;
  }

  unwrap() {
    return this.expect('unwrap called on Nothing');
  }

  unwrapOr<V>(defaultValue: V) {
    return this.isNothing ? defaultValue : this.value;
  }

  unwrapOrElse<E>(fn: AnyFunction<E>) {
    return this.isNothing ? fn() : this.value;
  }

  pipe<O>(): Maybe<O> {
    throw new Error('Method not implemented.');
  }

  equals(value: unknown): boolean {
    throw new Error('Method not implemented.');
  }

  get value(): T {
    throw new Error('Method not implemented.');
  }

  get isNothing() {
    return !this.isJust;
  }

  get isJust() {
    return !isNil(this.value);
  }

  static [Symbol.toStringTag]() {
    return 'Maybe';
  }
}

class JustImpl<T> extends DefaultMaybe<T> {
  constructor(protected readonly _value: T) {
    super();
  }

  override pipe<O>(...operators: MonotypeOperator[]) {
    return Just(pipe<T, O>(...operators)(this._value));
  }

  override equals(other: unknown) {
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

export const Just = <T>(value: T): Maybe<T> => (value === null || value === undefined ? Nothing : new JustImpl<T>(value));
export const Nothing: Maybe = new NothingImpl();
