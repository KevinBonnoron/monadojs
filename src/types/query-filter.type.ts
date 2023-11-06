import { Collection, UnwrapCollectionValue } from './collection.type';
import { nil } from './language.type';

type PrimitiveQueryFilterType<T> = {
  $eq?: T;
  $neq?: T;
  $gt?: T;
  $gte?: T;
  $lt?: T;
  $lte?: T;
  $is?: nil;
  $like?: RegExp | T;
  $in?: Collection<T>;
};

type CollectionQueryFilterType<T> = T extends Collection ? { $includes?: UnwrapCollectionValue<T>; } : never;

type LogicalQueryFilterType<T> = {
  $and?: PrimitiveQueryFilterType<T>[];
  $or?: PrimitiveQueryFilterType<T>[];
  $not?: PrimitiveQueryFilterType<T>;
}

type CommonQueryFilterType<T> = PrimitiveQueryFilterType<T> | CollectionQueryFilterType<T> | LogicalQueryFilterType<T>;

export type QueryFilterType<T> = T extends object ? { [K in keyof T]: T[K] | CommonQueryFilterType<T[K]> } : CommonQueryFilterType<T>;
