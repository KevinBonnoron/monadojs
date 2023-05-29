import { Collection, Operator } from '../../types';
import { PropertyKeyAccumulator, isCollection, isFunction, isNil, ɵobjectAccumulator2 } from '../../utils';

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

export function groupBy<P extends PropertyKey>(predicate: P): <S extends Record<P, O>, O>(source: Collection<S>) => Record<P, S[]>;
export function groupBy<S>(predicate: Operator): (source: Collection<S>) => Record<any, S[]>;
export function groupBy<S>(predicate: Operator | keyof S) {
  return (source: S) => isCollection<S>(source) ? [...source.values()].reduce(ɵobjectAccumulator2(appender(predicate)), {} as Record<any, S[]>) : source;
}
