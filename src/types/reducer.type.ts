export type Reducer<T, S = any> = (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => S;
