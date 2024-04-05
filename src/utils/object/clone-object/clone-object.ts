import { ɵcopyCollection } from '../../collection/collection.utils';
import { entriesOf } from '../entries-of/entries-of';
import { isArray } from '../is-array/is-array';
import { isCollection } from '../is-collection/is-collection';
import { isDate } from '../is-date/is-date';
import { isObject } from '../is-object/is-object';
import { isPlainObject } from '../is-plain-object/is-plain-object';

const cloneImpl = <T>(object: T): T => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const cloned: any = {};

  if (isPlainObject(object)) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    for (const [key, value] of entriesOf(object as any)) {
      if (isObject(value)) {
        cloned[key] = cloneObject(value);
      } else if (isArray(value)) {
        cloned[key] = value.map(cloneObject);
      } else {
        cloned[key] = value;
      }
    }
  }

  return cloned as T;
};

export const cloneObject = <S>(source: S): S => (isCollection(source) ? (ɵcopyCollection(source, [...source].map(cloneObject)) as S) : isDate(source) ? (new Date(+source) as S) : isObject<S>(source) ? cloneImpl<S>(source) : source);
