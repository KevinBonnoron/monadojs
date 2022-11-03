export type Mapper<I, O> = (value: I, index?: number, array?: I[]) => O;
export type MonotypeMapper<T> = Mapper<T, T>;
