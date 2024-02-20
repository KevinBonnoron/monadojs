// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Sorter<T = any> = (a: T, b: T) => number;
export type Sorters = Sorter[];
