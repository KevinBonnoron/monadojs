import { isPlainObject, isPrimitive, valuesOf } from '../../utils/object';

export function walk<I>(operator: (value: unknown, index?: PropertyKey) => void): <S extends I>(source: S) => S {
  return <S extends I>(source: S) => {
    const visitedObjects: unknown[] = [];

    function walkImpl<T>(element: T) {
      if (!visitedObjects.includes(element)) {
        if (!isPrimitive(element)) {
          visitedObjects.push(element);
        }

        operator(element);
        if (isPlainObject(element)) {
          [...valuesOf(element)].forEach(walkImpl);
        }
      }

      return element;
    }

    return walkImpl(source);
  };
}
