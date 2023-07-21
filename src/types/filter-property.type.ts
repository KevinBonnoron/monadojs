import { Collection } from './language.type';

export type FilterPropertyType<T> = {
  [K in keyof T]: {
    $eq?: T[K];
    $neq?: T[K];
    $gt?: T[K];
    $gte?: T[K];
    $lt?: T[K];
    $lte?: T[K];
    $in?: Collection<T[K]>;
    $like?: RegExp | string;
  }
}
