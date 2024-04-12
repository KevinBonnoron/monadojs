import type { Collection, Operator } from '../../types';
import { isCollection, ɵcopyCollection } from '../../utils';

export function concat<I, S extends Collection>(...sources: I[]): Operator<S, S> {
  return (source: S) => {
    let clonedSource = source;
    if (!isCollection(clonedSource)) {
      clonedSource = [source] as S;
    }

    return ɵcopyCollection(clonedSource, [...source].concat(sources)) as S;
  };
}
