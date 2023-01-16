import { Sorter } from '../../types';
import { isArray, isDate, isNil, isNumber, isString } from '../object/object.utils';

export interface SorterOptions {
  nullsAs: 'first' | 'last';
}

export const compare =
  (options?: SorterOptions) =>
  <T>(a: T, b: T) => {
    if (options?.nullsAs) {
      if (a === null && b !== null) {
        return options.nullsAs === 'first' ? -1 : 1;
      } else if (a !== null && b === null) {
        return options.nullsAs === 'first' ? 1 : -1;
      } else if (a === null && b === null) {
        return 0;
      }
    }

    return isString(a) && isString(b)
      ? a.localeCompare(b)
      : isDate(a) && isDate(b)
      ? a.getTime() - b.getTime()
      : isNumber(a) && isNumber(b)
      ? a - b
      : 0;
  };

export const ɵsorter =
  <T>(sortFn: (a: T, b: T) => number): Sorter<T> =>
  (a: T, b?: T) => {
    if (isArray<T>(a) && isNil(b)) {
      b = a[1];
      a = a[0];
    }

    return sortFn(a as T, b as T);
  };
