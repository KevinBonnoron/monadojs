import { Operator } from './types';

export * from './public_api';

declare global {
  interface Array<T> {
    pipe(): T;
    pipe<A>(o1: Operator<T, A>): A;
    pipe<A, B>(o1: Operator<T, A>, o2: Operator<A, B>): B;
    pipe<A, B, C>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>): C;
    pipe<A, B, C, D>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>): D;
    pipe<A, B, C, D, E>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>): E;
    pipe<A, B, C, D, E, F>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>): F;
    pipe<A, B, C, D, E, F, G>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>): G;
    pipe<A, B, C, D, E, F, G, H>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>, o8: Operator<G, H>): H;
    pipe<A, B, C, D, E, F, G, H, I>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>, o8: Operator<G, H>, o9: Operator<H, I>): I;
    pipe<A, B, C, D, E, F, G, H, I>(o1: Operator<T, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>, o8: Operator<G, H>, o9: Operator<H, I>, ...operators: Operator<any, any>[]): unknown;
  }

  interface Object {
    pipe(): this;
    pipe<A>(o1: Operator<this, A>): A;
    pipe<A, B>(o1: Operator<this, A>, o2: Operator<A, B>): B;
    pipe<A, B, C>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>): C;
    pipe<A, B, C, D>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>): D;
    pipe<A, B, C, D, E>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>): E;
    pipe<A, B, C, D, E, F>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>): F;
    pipe<A, B, C, D, E, F, G>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>): G;
    pipe<A, B, C, D, E, F, G, H>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>, o8: Operator<G, H>): H;
    pipe<A, B, C, D, E, F, G, H, I>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>, o8: Operator<G, H>, o9: Operator<H, I>): I;
    pipe<A, B, C, D, E, F, G, H, I>(o1: Operator<this, A>, o2: Operator<A, B>, o3: Operator<B, C>, o4: Operator<C, D>, o5: Operator<D, E>, o6: Operator<E, F>, o7: Operator<F, G>, o8: Operator<G, H>, o9: Operator<H, I>, ...operators: Operator<any, any>[]): unknown;
  }
}

function pipeFn(this: any, ...operators: Operator<unknown, unknown>[]) {
  return operators.reduce((value, operator) => operator(value), typeof this === 'object' ? this : this.slice());
}

const PIPE_PROPERTY_DESCRIPTOR: PropertyDescriptor = {
  value: pipeFn,
  enumerable: false,
  writable: true,
  configurable: true,
};

Object.defineProperty(Array.prototype, 'pipe', PIPE_PROPERTY_DESCRIPTOR);
Object.defineProperty(Object.prototype, 'pipe', PIPE_PROPERTY_DESCRIPTOR);
