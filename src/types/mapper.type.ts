export type Mapper<I = any, O = any> = (value: I, index?: keyof typeof value, array?: I[]) => O;
