import { isArray, isCollection, isDate, isObject, ɵcopyCollection } from '../../utils';
import { entries } from '../entries/entries';

const cloneImpl = <T>(object: T) => {
  const cloned: any = {};

  for (const [key, value] of entries()(object as any)) {
    if (isObject(value)) {
      cloned[key] = clone()(value);
    } else if (isArray(value)) {
      cloned[key] = value.map(clone());
    } else {
      cloned[key] = value;
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
