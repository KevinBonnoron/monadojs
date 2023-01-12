import { AllTypes, AnyFunction, Maybe, NoUndefinedField, Primitive } from '../../types';

export const isNull = (value: any): value is null => value === null;
export const isUndefined = (value: any): value is undefined => value === undefined;
export const isNil = (value: any): value is null | undefined => isNull(value) || isUndefined(value);
export const isString = (value: any): value is string => typeof value === 'string';
export const isNumber = (value: any): value is number => typeof value === 'number';
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';
export const isTrue = (value: any): value is true => value === true;
export const isFalse = (value: any): value is false => value === false;
export const isSymbol = (value: any): value is symbol => typeof value === 'symbol';
export const isDate = (value: any): value is Date => value instanceof Date;
export const isRegExp = (value: any): value is RegExp => Object.prototype.toString.call(value) === '[object RegExp]';
export const isPrimitive = (value: any): value is Primitive => isString(value) || isNumber(value) || isBoolean(value) || isSymbol(value);
export const isPropertyKey = (value: any): value is PropertyKey => isString(value) || isNumber(value) || isSymbol(value);
export const isMap = <K, V>(value: any): value is Map<K, V> => value instanceof Map;
export const isArray = <T>(value: any): value is T[] => Array.isArray(value);
export const isObject = <T>(value: any): value is T & object => typeof value === 'object' && !isArray(value) && !isNil(value);

/**
 * Return if passed `value` is empty. Should return true for : null, undefined, [], Invalid Date, {}
 * @param value
 * @returns boolean
 */
export const isEmpty = <T>(value: any): value is Required<NoUndefinedField<T>> => (isNil(value) ? true : isPrimitive(value) ? false : isFunction(value) ? false : isArray(value) ? value.length === 0 : isDate(value) ? !isNaN(Number(value)) : isRegExp(value) ? false : isObject(value) ? Object.keys(value).length === 0 : false);
export const isFunction = (value: any): value is AnyFunction => typeof value === 'function';
export const isEnum =
  <T extends object>(enumClass: T) =>
  (value: unknown): value is T[keyof T] =>
    Object.values(enumClass).includes(value);
export const isMaybe = (value: any): value is Maybe => hasProperties<Maybe>(value, 'pipe', 'isJust', 'isNothing', 'equals');
export const isType =
  <T>(type: AllTypes) =>
  (value: unknown): value is T =>
    type === null ? isNull(value) : type === undefined ? isUndefined(value) : type === String ? isString(value) : type === Number ? isNumber(value) : type === Boolean ? isBoolean(value) : type === Symbol ? isSymbol(value) : type === Date ? isDate(value) : type === RegExp ? isRegExp(value) : type === Array ? isArray(value) : type === Map ? isMap(value) : type === Object ? isObject(value) : type === Function ? isFunction(value) : (value as any).constructor === type;

export const toNull = (value: unknown) => null;
export const toUndefined = (value: unknown) => undefined;
export const toString = (value: unknown) => (isSymbol(value) ? 'Symbol' : `${value}`);
export const toNumber = (value: unknown) => (isSymbol(value) ? NaN : parseInt(value as string));
export const toBoolean = (value: unknown) => (isNumber(value) ? value !== 0 : isArray(value) ? value.length > 0 : !isNil(value));
export const toSymbol = (value: unknown) => Symbol();
export const toDate = (value: unknown) => new Date(value as string | number | Date);
export const toRegExp = (value: unknown) => new RegExp(value as string | RegExp);
export const toArray = (value: unknown) => [value];
export const toFunction = (value: unknown) => () => value;
export const toType = (type: AllTypes) => (value: unknown) => type === null ? toNull(value) : type === undefined ? toUndefined(value) : type === String ? toString(value) : type === Number ? toNumber(value) : type === Boolean ? toBoolean(value) : type === Symbol ? toSymbol(value) : type === Date ? toDate(value) : type === RegExp ? toRegExp(value) : type === Array ? toArray(value) : type === Function ? toFunction(value) : value;

export const isEqual = <T, V>(o1: T, o2: V): boolean => (isArray(o1) && isArray(o2) ? (o1.length !== o2.length ? false : o1.every((value, index) => isEqual(value, o2[index]))) : isObject(o1) && isObject(o2) ? (Object.keys(o1).length !== Object.keys(o2).length ? false : Object.entries(o1).every(([key, value]) => isEqual(value, o2[key as keyof V]))) : Object.is(o1, o2));
export const hasProperties = <T>(value: T, ...properties: (keyof T)[]) => !isNil(value) && isObject(value) && properties.every((property) => property in value);
export const haveSameProperties = (o1: any, o2: any) => hasProperties(o2, ...Object.keys(o1)) && hasProperties(o1, ...Object.keys(o2));

export const haveSameTypes = <T, S>(o1: T, o2: S) => (isNil(o1) ? false : isNil(o2) ? false : isArray(o1) && !isArray(o2) ? false : !isArray(o1) && isArray(o2) ? false : isArray(o1) && isArray(o2) ? o1.length === o2.length && o1.every((value, index) => typeof value === typeof o2[index]) : typeof o1 === typeof o2);
export const propertyIn = <T>(property: keyof T, value: unknown): value is T => !isUndefined((value as any)[property]);

const OPEN_PARENTHESIS = '(';
const CLOSE_PARENTHESIS = ')';
const EQUAL = '=';
const COMMA = ',';
const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';
const ESCAPE = '\\';
export const functionParameterParser = (fn: Function) => {
  const getFnParameterString = (fnString: string) => {
    fnString = ~fnString.indexOf(`(`) ? fnString.slice(fnString.indexOf(`(`)) : fnString;
    fnString = (fnString.match(/(^[a-z_](?=(=>|=>{)))|((^\([^)].+\)|\(\))(?=(=>|{)))/i) || [fnString])[0];
    return !fnString.startsWith(`(`) ? `(${fnString})` : fnString;
  };

  const fnParameterString = getFnParameterString(fn.toString().replace(/\s+/g, ``));
  if (fnParameterString === '()') {
    return { all: [], required: [], optionals: [] };
  }

  let parenthesisCount = 0;
  let isInEqualStatement = false;
  let isInSingleQuote = false;
  let isInDoubleQuote = false;
  let isInEscape = false;
  let currentParameterName = '';
  let currentParameterValue = '';
  const parameters: { name: string; value: string; required: boolean }[] = [];
  const addCurrentParameter = () => {
    let required = true;
    if (isInEqualStatement) {
      isInEqualStatement = false;
      required = false;
    }

    const parameter: any = {
      name: currentParameterName,
      required,
    };

    if (currentParameterValue !== '') {
      parameter.value = currentParameterValue;
    }

    parameters.push(parameter);

    currentParameterName = '';
    currentParameterValue = '';
  };

  for (const character of fnParameterString) {
    if (isInEscape) {
      isInEscape = false;
      if (isInEqualStatement) {
        currentParameterValue += `${ESCAPE}${character}`;
      }
      continue;
    }

    if (character === ESCAPE) {
      isInEscape = true;
      continue;
    }

    if (isInSingleQuote) {
      if (character === SINGLE_QUOTE) {
        isInSingleQuote = false;
      } else if (isInEqualStatement) {
        currentParameterValue += character;
      }

      continue;
    }

    if (isInDoubleQuote) {
      if (character === DOUBLE_QUOTE) {
        isInDoubleQuote = false;
      } else if (isInEqualStatement) {
        currentParameterValue += character;
      }

      continue;
    }

    if (character === OPEN_PARENTHESIS) {
      parenthesisCount++;
    } else if (character === CLOSE_PARENTHESIS) {
      parenthesisCount--;
      if (parenthesisCount === 0) {
        addCurrentParameter();
      }
    } else if (character === EQUAL) {
      isInEqualStatement = true;
    } else if (character === COMMA) {
      addCurrentParameter();
    } else if (character === SINGLE_QUOTE) {
      isInSingleQuote = true;
    } else if (character === DOUBLE_QUOTE) {
      isInDoubleQuote = true;
    } else if (isInEqualStatement) {
      currentParameterValue += character;
    } else {
      // Variable name
      currentParameterName += character;
    }
  }

  return {
    all: parameters,
    required: parameters.filter((parameter) => parameter.required),
    optionals: parameters.filter((parameter) => !parameter.required),
  };
};

export const functionParameterCount = (fn: Function) => {
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

  let [parameterString, commaCount, bracketCount, lastParen, i, inStrSingle, inStrDouble, open, close] = [fnParameterString, 0, 0, 0, 0, false, false, [...`([{`], [...`)]}`]];
  for (; i < parameterString.length; i += 1) {
    const character = parameterString[i];
    if (open.includes(character) && !inStrSingle && !inStrDouble) {
      bracketCount += 1;
      lastParen = i;
    }

    if (close.includes(character) && !inStrSingle && !inStrDouble) {
      bracketCount -= 1;
      if (bracketCount < 1) {
        break;
      }
    }

    // If we found an = that mean we reached the default parameter part
    if (character === '=' && !inStrSingle && !inStrDouble) {
      break;
    }

    if (character === "'" && !inStrDouble && parameterString[i - 1] !== '\\') {
      inStrSingle = !inStrSingle;
    }

    if (character === '"' && !inStrSingle && parameterString[i - 1] !== '\\') {
      inStrDouble = !inStrDouble;
    }

    if (character === ',' && bracketCount === 1 && !inStrSingle && !inStrDouble) {
      commaCount += 1;
    }
  }

  return commaCount === 0 && parameterString.substring(lastParen + 1, i).trim().length === 0 ? 0 : commaCount + 1;
};
