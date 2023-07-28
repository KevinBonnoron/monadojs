export const isEnum = <T extends object>(enumClass: T) => (value: unknown): value is T[keyof T] => Object.values(enumClass).includes(value);
