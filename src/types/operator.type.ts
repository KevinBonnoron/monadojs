export type Operator<I = any, O = any> = (input: I) => O;
export type MonotypeOperator<T = any> = Operator<T, T>;
