export type Collection<V = unknown, K = unknown> = Array<V> | Set<V> | Map<K, V>;
export type ReadonlyCollection<V = unknown, K = unknown> = Readonly<Collection<V, K>>;
export type CollectionTypes = ArrayConstructor | SetConstructor | MapConstructor;

/**
 * Return the collection enclosed value
 */
export type UnwrapCollectionValue<T> = T extends Array<infer V> ? V : T extends Set<infer V> ? V : T extends Map<unknown, infer V> ? V : never;

/**
 * Return the passed collection type as for V parameter
 */
export type ToCollectionType<C extends Collection, V> = C extends Array<unknown> ? V[] : C extends Set<unknown> ? Set<V> : C extends Map<infer K, unknown> ? Map<K, V> : never;
