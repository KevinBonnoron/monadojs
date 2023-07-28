export type UnwrapCollectionValue<T> = T extends Array<infer V> ? V : T extends Set<infer V> ? V : T extends Map<unknown, infer V> ? V : never;
