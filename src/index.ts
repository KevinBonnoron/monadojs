import { pipe } from './operators';
import { Operator } from './types';

export * from './public_api';

declare global {
  interface Array<T> {
    pipe(): this;
    pipe<A>(o1: Operator<this, A>): A;
    pipe<A, B>(o1: Operator<this, A>, o2: Operator<A, B>): B;
    pipe<A, B, C>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>): C;
    pipe<A, B, C, D>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>): D;
    pipe<A, B, C, D, E>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>): E;
    pipe<A, B, C, D, E>(
      o1: Operator<this, A>,
      o2: Operator<A, B>,
      o3: Operator<B, C>,
      o4: Operator<C, D>,
      o5: Operator<D, E>,
      ...operators: Operator<any, any>[]
    ): unknown;
  }

  interface Set<T> {
    pipe(): this;
    pipe<A>(o1: Operator<this, A>): A;
    pipe<A, B>(o1: Operator<this, A>, o2: Operator<A, B>): B;
    pipe<A, B, C>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>): C;
    pipe<A, B, C, D>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>): D;
    pipe<A, B, C, D, E>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>): E;
    pipe<A, B, C, D, E>(
      o1: Operator<this, A>,
      o2: Operator<A, B>,
      o3: Operator<B, C>,
      o4: Operator<C, D>,
      o5: Operator<D, E>,
      ...operators: Operator<any, any>[]
    ): unknown;
  }

  interface Map<K, V> {
    pipe(): this;
    pipe<A>(o1: Operator<this, A>): A;
    pipe<A, B>(o1: Operator<this, A>, o2: Operator<A, B>): B;
    pipe<A, B, C>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>): C;
    pipe<A, B, C, D>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>): D;
    pipe<A, B, C, D, E>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>): E;
    pipe<A, B, C, D, E>(
      o1: Operator<this, A>,
      o2: Operator<A, B>,
      o3: Operator<B, C>,
      o4: Operator<C, D>,
      o5: Operator<D, E>,
      ...operators: Operator<any, any>[]
    ): unknown;
  }

  interface Object {
    pipe(): this;
    pipe<A>(o1: Operator<this, A>): A;
    pipe<A, B>(o1: Operator<this, A>, o2: Operator<A, B>): B;
    pipe<A, B, C>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>): C;
    pipe<A, B, C, D>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>): D;
    pipe<A, B, C, D, E>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>): E;
    pipe<A, B, C, D, E>(
      o1: Operator<this, A>,
      o2: Operator<A, B>,
      o3: Operator<B, C>,
      o4: Operator<C, D>,
      o5: Operator<D, E>,
      ...operators: Operator<any, any>[]
    ): unknown;
  }
}

function pipeFn(this: any, ...operators: Operator<unknown, unknown>[]) {
  return pipe(...operators)(typeof this === 'object' ? this : this.slice());
}

const PIPE_PROPERTY_DESCRIPTOR: PropertyDescriptor = {
  value: pipeFn,
  enumerable: false,
  writable: true,
  configurable: true
};

Object.defineProperty(Array.prototype, 'pipe', PIPE_PROPERTY_DESCRIPTOR);
Object.defineProperty(Object.prototype, 'pipe', PIPE_PROPERTY_DESCRIPTOR);
