export type NoUndefinedField<T> = { [P in keyof T]: Exclude<T[P], null | undefined> };
