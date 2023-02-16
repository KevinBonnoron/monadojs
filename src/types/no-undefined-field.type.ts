import { nil } from './language.type';

export type NoUndefinedField<T> = { [P in keyof T]: Exclude<T[P], nil> };
