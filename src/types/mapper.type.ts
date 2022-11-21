export type Mapper<I = any, O = any> = (value: I, index?: number, array?: I[]) => O;
export type MonotypeMapper<T> = Mapper<T, T>;
