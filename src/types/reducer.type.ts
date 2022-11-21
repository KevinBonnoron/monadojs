export type Reducer<T = any, S = any> = (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => S;
export type MonoTypeReducer<T> = Reducer<T, T>;
