export type Collection<V = unknown, K = unknown> = Array<V> | Set<V> | Map<K, V>;
export type ReadonlyCollection<V = unknown, K = unknown> = Readonly<Collection<V, K>>;
export type CollectionTypes = ArrayConstructor | SetConstructor | MapConstructor;

/**
 * Return the collection enclosed value
 */
export type UnwrapCollectionValue<T> =
  T extends Array<infer V> ? V :
  T extends Set<infer V> ? V :
  T extends Map<unknown, infer V> ? V :
  never
  ;
