export type Mapper<T, S = any> = (value: T, index?: number, array?: T[]) => S;
