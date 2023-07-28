export type Sorter<T = any> = (a: T, b: T) => number;
export type Sorters = Sorter[];