export function isEnum<T extends object>(value: unknown, enumClass: T): value is T[keyof T] {
  return Object.values(enumClass).includes(value);
}
