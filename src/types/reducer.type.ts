export type Reducer<T = any, U = any> = (previousValue: T | U, currentValue: T, currentIndex: number, array: T[]) => U;
export type MonoTypeReducer<T> = Reducer<T, T>;
