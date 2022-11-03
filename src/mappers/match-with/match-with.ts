import { Filter, Mapper } from '../../types';
import { isFunction } from '../../utils';

export const matchWith =
  <T, S>(matches: Map<keyof T | Filter<T>, S | Mapper<T, S>>) =>
  (value: T) => {
    for (const [matchFn, matchedValue] of matches) {
      if (isFunction(matchFn) && matchFn(value)) {
        if (isFunction(matchedValue)) {
          return matchedValue(value);
        }

        return matchedValue;
      }
    }

    return value;
  };
