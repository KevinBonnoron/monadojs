export function isSet<V>(value: unknown): value is Set<V> {
  return value instanceof Set;
}
