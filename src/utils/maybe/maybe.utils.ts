import { pipe } from '../../operators/pipe/pipe';
import { AnyFunction, Maybe, MonotypeOperator } from '../../types';
import { isMaybe, isNil } from '../object';

interface DefaultMaybe<T> extends Maybe<T> {}
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

  pipe<O>(...operators: MonotypeOperator[]) {
    return Just(pipe<T, O>(...operators)(this._value));
  }

  equals(other: unknown) {
    if (isMaybe(other)) {
      return other.isJust && other.equals(this._value);
    }

    return this._value === other;
  }

  get value(): T {
    return this._value;
  }
}

class NothingImpl extends DefaultMaybe<null> {
  pipe() {
    return Nothing;
  }

  equals(other: unknown) {
    if (isMaybe(other)) {
      return other.isNothing;
    }

    return other === null || other === undefined;
  }

  get value() {
    return null;
  }
}

export const Just = <T>(value: T): Maybe<T> => (value === null || value === undefined ? Nothing : new JustImpl<T>(value));
export const Nothing: Maybe = new NothingImpl();
