import { NoUndefinedField, Type } from '../../types';

export const isNull = (value: unknown): value is null => value === null;
export const isUndefined = (value: unknown): value is undefined => value === undefined;
export const isNil = (value: unknown): value is null | undefined => isNull(value) || isUndefined(value);
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol';
export const isPrimitive = (value: unknown): value is string | number | boolean | symbol => isString(value) || isNumber(value) || isBoolean(value) || isSymbol(value);
export const isMap = <T>(value: unknown): value is Map<T, T> => value instanceof Map;
export const isArray = <T>(value: unknown): value is T[] => Array.isArray(value);
export const isObject = <T>(value: unknown): value is T & object => typeof value === 'object' && !isArray(value) && !isNil(value);
export const isEmpty = <T>(value: unknown): value is Required<NoUndefinedField<T>> => (isNil(value) ? true : isPrimitive(value) ? true : isFunction(value) ? true : isArray(value) ? value.length === 0 : isObject<any>(value) ? Object.keys(value).length === 0 : false);
export const isFunction = (value: unknown): value is Function => typeof value === 'function';
export const is =
  <T>(type: String | Number | Boolean | Symbol | unknown[] | Object | Function | Type<T>) =>
  (value: unknown): value is T =>
    type === String ? isString(value) : type === Number ? isNumber(value) : type === Boolean ? isBoolean(value) : type === Symbol ? isSymbol(value) : type === Array ? isArray(value) : type === Object ? isObject(value) : type === Function ? isFunction(value) : (value as any).constructor === type;

export const isEqual = <T>(o1: T, o2: T): boolean => (isArray(o1) && isArray(o2) ? (o1.length !== o2.length ? false : o1.every((value, index) => isEqual(value, o2[index]))) : isObject(o1) && isObject(o2) ? (Object.keys(o1).length !== Object.keys(o2).length ? false : Object.entries(o1).every(([key, value]) => isEqual(value, o2[key as keyof T]))) : Object.is(o1, o2));
export const haveSameProperties = <T>(o1: T, o2: T) => (isNil(o1) || isNil(o2) ? false : isObject<T>(o1) && isObject<T>(o2) ? Object.keys(o1).every((key) => o2.hasOwnProperty(key)) && Object.keys(o2).every((key) => o1.hasOwnProperty(key)) : false);

export const haveSameTypes = <T, S>(o1: T, o2: S) => (isNil(o1) ? false : isNil(o2) ? false : isArray(o1) && !isArray(o2) ? false : !isArray(o1) && isArray(o2) ? false : isArray(o1) && isArray(o2) ? o1.length === o2.length && o1.every((value, index) => typeof value === typeof o2[index]) : typeof o1 === typeof o2);

export const propertyIn = <T>(property: keyof T, value: unknown): value is T => !isUndefined((value as any)[property]);

export const getFunctionParameterCount = (fn: Function) => {
  const getParamsOnly = (fnString: string) => {
    fnString = ~fnString.indexOf(`(`) ? fnString.slice(fnString.indexOf(`(`)) : fnString;
    fnString = (fnString.match(/(^[a-z_](?=(=>|=>{)))|((^\([^)].+\)|\(\))(?=(=>|{)))/i) || [fnString])[0];
    return !fnString.startsWith(`(`) ? `(${fnString})` : fnString;
  };

  const fnParameterString = getParamsOnly(fn.toString().replace(/\s+/g, ``));

  // no parameters, no need for further parsing
  if (fnParameterString === `()`) {
    return 0;
  }

  let [paramStr, commaCount, bracketCount, lastParen, i, inStrSingle, inStrDouble, open, close] = [fnParameterString, 0, 0, 0, 0, false, false, [...`([{`], [...`)]}`]];
  for (; i < paramStr.length; i += 1) {
    if (open.includes(paramStr[i]) && !inStrSingle && !inStrDouble) {
      bracketCount += 1;
      lastParen = i;
    }
    if (close.includes(paramStr[i]) && !inStrSingle && !inStrDouble) {
      bracketCount -= 1;
      if (bracketCount < 1) {
        break;
      }
    }
    if (paramStr[i] === "'" && !inStrDouble && paramStr[i - 1] !== '\\') {
      inStrSingle = !inStrSingle;
    }
    if (paramStr[i] === '"' && !inStrSingle && paramStr[i - 1] !== '\\') {
      inStrDouble = !inStrDouble;
    }
    if (paramStr[i] === ',' && bracketCount === 1 && !inStrSingle && !inStrDouble) {
      commaCount += 1;
    }
  }

  return commaCount === 0 && paramStr.substring(lastParen + 1, i).trim().length === 0 ? 0 : commaCount + 1;
};
