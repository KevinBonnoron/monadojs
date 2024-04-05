import { isArray } from '../is-array/is-array';
import { isCollection } from '../is-collection/is-collection';
import { isNil } from '../is-nil/is-nil';

export const toArray = (value: unknown): unknown[] => (isNil(value) ? [] : isArray(value) ? value : isCollection(value) ? [...value] : [value]);
