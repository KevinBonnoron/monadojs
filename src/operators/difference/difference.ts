import { entriesOf, isArray, isPlainObject, keysOf, propIn } from '../../utils';
import { contains } from '../../utils/object/contains/contains';
import { isEqual } from '../../utils/object/is-equal/is-equal';

interface DifferenceOptions {
  bothWays?: boolean;
  compareFn?: <T, V>(o1: T, o2: V) => boolean;
}

const objectDifferenceImpl = (object: object, source: object, { bothWays, compareFn }: Required<DifferenceOptions>) => [...entriesOf(source)].reduce((result, [key, value]) => {
  if (propIn(object, key) && compareFn(object[key], value)) {
    result.splice(result.indexOf(key), 1);
  } else if (!contains(result, key)) {
    result.push(key);
  }

  return result;
}, bothWays ? [...keysOf(object)] : []);

const arrayDifferenceImpl = <T, S>(object: T[], source: S[], { bothWays, compareFn }: Required<DifferenceOptions>) => [...entriesOf(source)].reduce((result, [index, value]) => {
  if (object[index] !== undefined && compareFn(value, object[index])) {
    result.splice(result.indexOf(index), 1);
  } else if (!contains(result, index)) {
    result.push(index);
  }

  return result;
}, bothWays ? [...keysOf(object)] : []);

export const difference = <O>(object: O, { bothWays = false, compareFn = isEqual }: DifferenceOptions = {}) => <S>(source: S) => (
  isPlainObject(source) && isPlainObject(object) ? objectDifferenceImpl(object, source, { bothWays, compareFn }) :
    isArray(source) && isArray(object) ? arrayDifferenceImpl(object, source, { bothWays, compareFn }) :
      []
);
