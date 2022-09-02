export type Mapper<I, O = any> = (value: I, index?: number, array?: I[]) => O;
