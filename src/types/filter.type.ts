// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Filter<T = any> = (value: T, index?: number, array?: T[]) => boolean;
export type Filters = Filter[];
