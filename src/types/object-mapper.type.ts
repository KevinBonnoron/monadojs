import { math, number, string } from '../wrappers';
import { Mapper } from './mapper.type';

type CommonPropertyMapType = 'pick'
type StringPropertyMapType = keyof typeof string | CommonPropertyMapType;
type NumberPropertyMapType = keyof typeof number | keyof typeof math | CommonPropertyMapType;

export type PropertyMapperType<T, K extends keyof T> =
  K extends string ? StringPropertyMapType :
  K extends number ? NumberPropertyMapType :
  never;

export type ObjectMapperType<T> = {
  [K in keyof T]: Mapper<any, T[K]>;
}
