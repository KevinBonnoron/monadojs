export type Reducer<T, S> = (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => S;
export type AccumulatedReducer<T, S> = (previousValue: T[], currentValue: T, currentIndex: number, array: T[]) => S;
export type MonoTypeReducer<T> = Reducer<T, T>;
