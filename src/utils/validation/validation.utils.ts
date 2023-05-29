import { isArray, isFunction, isPlainObject, isSet } from '../object';

interface ArrayInterceptor<T> {
  push?: (_value: T) => boolean;
}

interface SetInterceptor<T> {
  add?: (value: T) => boolean;
}

interface ObjectInterceptor {
  defineProperty?: (property: string) => boolean;
  get?: Record<PropertyKey, () => any>;
}

const getHandler = <T extends object>(target: T, property: PropertyKey, receiver: any, interceptors?: Record<PropertyKey, any>) => {
  const rawValue = Reflect.get(target, property, receiver);

  if (interceptors) {
    // We try to call a method
    if (isFunction(rawValue)) {
      if (property in interceptors) {
        return (...args: any[]) => {
          if (interceptors[property](...args)) {
            (target as any)[property](...args);
          }
        };
      }

      return rawValue.bind(target);
    }

    // We try to get the corresponding value
    if (property in interceptors) {
      return interceptors[property]();
    }
  }

  return rawValue;
};

const definePropertyHandler = <T extends object>(
  target: T,
  property: string | symbol,
  attributes: PropertyDescriptor,
  interceptors?: Record<any, any>
) => {
  if (interceptors) {
    if ('defineProperty' in interceptors) {
      if (!interceptors.defineProperty(property)) {
        return true;
      }
    }
  }

  Object.defineProperty(target, property, attributes);
  return true;
};

const proxyfyArray = <T>(array: T[], interceptors?: ArrayInterceptor<T>): T[] => new Proxy(array, {
    get(target, property, receiver) {
      return getHandler(target, property, receiver, interceptors);
    }
  });

const proxyfySet = <T>(set: Set<T>, interceptors?: SetInterceptor<T>): Set<T> => new Proxy(set, {
    get(target, property, receiver) {
      return getHandler(target, property, receiver, interceptors);
    }
  });

const proxyfyObject = <T extends object>(object: T, interceptors?: ObjectInterceptor) => new Proxy(object, {
    get(target, property, receiver) {
      return getHandler(target, property, receiver, interceptors?.get);
    },
    defineProperty(target, property, attributes) {
      return definePropertyHandler(target, property, attributes, interceptors);
    }
  });

export function intercept<T>(value: T[], interceptions: ArrayInterceptor<T>): T[];
export function intercept<T>(value: Set<T>, interceptions: SetInterceptor<T>): Set<T>;
export function intercept<T extends object>(value: T, interceptions: ObjectInterceptor): T;
export function intercept<T>(value: T, interceptions: any) {
  if (isArray(value)) {
    return proxyfyArray(value, interceptions);
  }

  if (isSet(value)) {
    return proxyfySet(value, interceptions);
  }

  if (isPlainObject(value)) {
    return proxyfyObject(value, interceptions);
  }

  return value;
}
