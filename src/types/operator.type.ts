// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Operator<I = any, O = any> = (input: I) => O;
export type Operators = Operator[];
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type MonotypeOperator<T = any> = Operator<T, T>;
