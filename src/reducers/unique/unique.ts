import { identity } from '../../operators';
import { Operator, Reducer } from '../../types';
import { arrayAccumulator, isEqual } from '../../utils';

const appender =
  <T>(operator: Operator, compareFn: (a: T, b: T) => boolean) =>
  (accumulator: T[], value: T) => {
    if (!accumulator.some((val) => compareFn(operator(val), operator(value)))) {
      accumulator.push(value);
    }

    return accumulator;
  };

// TODO update type of compareFN which should be the return type from "operator"
export const unique =
  <T>(operator: Operator = identity<T>(), compareFn: (a: T, b: T) => boolean = isEqual): Reducer<T> =>
  (previousValue: T, currentValue: T, currentIndex: number) =>
    arrayAccumulator(previousValue, currentValue, currentIndex, appender(operator, compareFn));
