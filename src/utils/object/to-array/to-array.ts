import { isArray } from '../is-array/is-array';
import { isCollection } from '../is-collection/is-collection';
import { isNil } from '../is-nil/is-nil';

export const toArray = <V = unknown>(value: V) => (isNil(value) ? [] : isArray(value) ? value : isCollection(value) ? [...value] : [value]);
