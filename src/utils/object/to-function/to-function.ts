/**
 * Convert a value to a function returning this value
 *
 * @param value
 * @returns
 */
export function toFunction(value: unknown): () => unknown {
  return () => value;
}
