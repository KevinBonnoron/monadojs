export type Operator<I, O> = (input: I) => O;
export type MonotypeOperator<T> = Operator<T, T>;
