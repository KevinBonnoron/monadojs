import { prop } from '../../mappers';
import { Mapper, ObjectMapperType } from '../../types';
import { entriesOf, isFunction, isPropertyKey } from '../object';

export function createMapperFn<E>(predicate: Mapper | PropertyKey | ObjectMapperType<E>): Mapper {
  if (isFunction(predicate)) {
    return predicate as Mapper;
  }

  if (isPropertyKey(predicate)) {
    return prop(predicate);
  }

  return (element: E) => {
    // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
    return [...entriesOf(predicate)].reduce((accumulator, [property, mapper]) => ({ ...accumulator, [property]: mapper(element[property]) }), {});
  };
}
