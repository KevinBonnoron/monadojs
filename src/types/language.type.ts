export type Types = 'string' | 'number' | 'boolean' | 'symbol' | 'object' | 'function' | 'array' | 'date' | 'map' | 'regexp';
export type Primitive = string | number | boolean | symbol;
export type ObjectTypes = object | Function | Array<unknown> | Date | Map<unknown, unknown> | RegExp;
export type AllTypes = Primitive | ObjectTypes | null | undefined;
