import { isArray } from '../is-array/is-array';
import { isMap } from '../is-map/is-map';
import { isNil } from '../is-nil/is-nil';
import { isSet } from '../is-set/is-set';

export const toSet = <V = unknown>(value: V) => (
  isNil(value) ? new Set() :
  isSet(value) ? value :
  isArray(value) || isMap(value) ? new Set([...value]) :
  new Set([value])
);
