// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type AnyFunction<R = any> = (...args: any[]) => R;
