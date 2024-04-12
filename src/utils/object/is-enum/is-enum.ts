export function isEnum<T extends object>(enumClass: T) {
  return (value: unknown): value is T[keyof T] => Object.values(enumClass).includes(value);
}
