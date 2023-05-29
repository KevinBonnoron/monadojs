export type Mapper<I = any, O = any> = (value: I, index?: number, array?: I[]) => O;
