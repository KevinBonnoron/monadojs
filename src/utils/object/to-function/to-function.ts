/**
 * Convert a value to a function returning this value
 *
 * @param value
 * @returns
 */
export function toFunction<V>(value: V): () => V {
  return () => value;
}
