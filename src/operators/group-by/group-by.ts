import { Collection, Operator } from '../../types';
import { isCollection, isFunction, ɵobjectAccumulator } from '../../utils';

const keyGeneratorFn =
  <T>(predicate: Operator<T, PropertyKey> | keyof T) =>
  (value: T) =>
    isFunction(predicate) ? predicate(value) : value[predicate];

export function groupBy<P extends PropertyKey>(predicate: P): <S extends Record<P, PropertyKey>>(source: Collection<S>) => Record<S[P], S[]>;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function groupBy<O extends PropertyKey, I = any>(predicate: Operator<I, O>): <S extends I>(source: Collection<S>) => Record<O, S[]>;
export function groupBy(predicate: PropertyKey | Operator) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return <S>(source: S) => (isCollection<S>(source) ? [...source.values()].reduce(ɵobjectAccumulator(keyGeneratorFn(predicate)), {}) : (source as any));
}
