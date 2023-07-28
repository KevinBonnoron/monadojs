import { Collection, Operator } from '../../types';
import { PropertyKeyAccumulator, isCollection, isFunction, isNil, ɵobjectAccumulator } from '../../utils';

const appender =
  <T>(predicate: Operator<T, PropertyKey> | keyof T) => (accumulator: PropertyKeyAccumulator<T>, value: T) => {
    const key = isFunction(predicate) ? predicate(value) : value[predicate];
    if (!isNil(key)) {
      if (accumulator[key] === undefined) {
        accumulator[key] = [] as T[];
      }

      (accumulator[key] as any).push(value);
    }

    return accumulator;
  };

export function groupBy<P extends PropertyKey>(predicate: P): <S extends Record<P, PropertyKey>>(source: Collection<S>) => Record<S[P], S[]>;
export function groupBy<O extends PropertyKey, I = any>(predicate: Operator<I, O>): <S extends I>(source: Collection<S>) => Record<O, S[]>;
export function groupBy(predicate: PropertyKey | Operator) {
  return <S>(source: S) => isCollection<S>(source) ? [...source.values()].reduce(ɵobjectAccumulator(appender(predicate)), {}) : source;
}
