export * from './any-function.type';
export * from './filter.type';
export * from './language.type';
export * from './mapper.type';
export * from './maybe.type';
export * from './no-undefined-field.type';
export * from './operator.type';
export * from './reducer.type';
export * from './sorter.type';

export type Type<T> = new (...args: any[]) => T;
