import { eq } from '../../filters';
import { isCollection, isMap, isPlainObject } from '../../utils';

export const indexOf =
  (searchElement: any, fromIndex?: number) =>
  <S>(source: S) =>
    isMap(source)
      ? [...source.keys()][[...source.values()].indexOf(searchElement, fromIndex)] ?? -1
      : isCollection<S>(source)
      ? [...source.values()].indexOf(searchElement, fromIndex)
      : isPlainObject(source)
      ? Object.keys(source)[Object.values(source).findIndex(eq(searchElement), fromIndex)] ?? -1
      : source === searchElement
      ? 0
      : -1;
