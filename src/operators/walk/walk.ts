import { isPlainObject, isPrimitive, valuesOf } from '../../utils/object';

export function walk(operator: (value: unknown, index?: PropertyKey) => void) {
  return <S>(source: S): S => {
    const visitedObjects: unknown[] = [];

    const walkImpl = <T>(element: T) => {
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
    };

    return walkImpl(source);
  };
}
