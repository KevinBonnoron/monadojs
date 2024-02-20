// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Mapper<I = any, O = any> = (value: I, index?: keyof typeof value, array?: I[]) => O;
