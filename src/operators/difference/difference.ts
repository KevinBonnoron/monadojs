import { has } from '../../filters/has/has';
import { isArray, isPlainObject } from '../../utils';
import { isEqual } from '../../utils/object/is-equal/is-equal';
import { keys } from '../keys/keys';

interface DifferenceOptions {
  bothWays?: boolean;
  compareFn?: <T, V>(o1: T, o2: V) => boolean;
}

const objectDifferenceImpl = (object: object, source: object, { bothWays, compareFn }: Required<DifferenceOptions>) => [...keys()(source)].reduce((result, key) => {
  if (!has(key)(object)) {
    result.push(key);
  } else if (compareFn(object[key], source[key])) {
    const index = result.indexOf(key);
    result.splice(index, 1);
  }

  return result;
}, bothWays ? Object.keys(object) : []);

const arrayDifferenceImpl = <T, S>(object: T[], source: S[], { bothWays, compareFn }: Required<DifferenceOptions>) => {
  return [];
};

export const difference = <O>(object: O, { bothWays = false, compareFn = isEqual }: DifferenceOptions = {}) => <S>(source: S) => isPlainObject(source) && isPlainObject(object) ? objectDifferenceImpl(object, source, { bothWays, compareFn }) :
    isArray(source) && isArray(object) ? arrayDifferenceImpl(object, source, { bothWays, compareFn }) :
      [];
