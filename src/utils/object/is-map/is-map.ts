/**
 * Type guard for `value instanceof Map`
 *
 * @param value
 * @returns
 */
export function isMap<K, V>(value: unknown): value is Map<K, V> {
  return value instanceof Map;
}
