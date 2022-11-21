export * from './filter.type';
export * from './language.type';
export * from './mapper.type';
export * from './no-undefined-field.type';
export * from './operator.type';
export * from './reducer.type';
export * from './sorter.type';

export type Type<T> = new (...args: any[]) => T;
