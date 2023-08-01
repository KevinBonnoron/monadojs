import { entriesOf, isArray, isCollection, isDate, isObject, isPlainObject, ɵcopyCollection } from '../../utils';

const cloneImpl = <T>(object: T) => {
  const cloned: any = {};

  if (isPlainObject(object)) {
    for (const [key, value] of entriesOf(object as any)) {
      if (isObject(value)) {
        cloned[key] = clone()(value);
      } else if (isArray(value)) {
        cloned[key] = value.map(clone());
      } else {
        cloned[key] = value;
      }
    }
  }

  return cloned as T;
};

export const clone = () => <S>(source: S): S => (
  isCollection(source) ? (ɵcopyCollection(source, [...source].map(clone())) as S) :
    isDate(source) ? (new Date(+source) as S) :
      isObject<S>(source) ? cloneImpl<S>(source) :
        source
);
