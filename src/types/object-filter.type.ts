import { Collection, nil } from './language.type';
import { UnwrapCollectionValue } from './unwrap-collection-value.type';

export type PropertyFilterType<T, K extends keyof T> = {
  $eq?: T[K];
  $neq?: T[K];
  $gt?: T[K];
  $gte?: T[K];
  $lt?: T[K];
  $lte?: T[K];
  $is?: nil;
  $in?: Collection<T[K]>;
  $includes?: UnwrapCollectionValue<T[K]>;
  $like?: RegExp | T[K];
  $and?: PropertyFilterType<T, K>[];
  $or?: PropertyFilterType<T, K>[];
  $not?: PropertyFilterType<T, K>;
}

export type ObjectFilterType<T extends object> = {
  [K in keyof T]: T[K] | PropertyFilterType<T, K>;
}
