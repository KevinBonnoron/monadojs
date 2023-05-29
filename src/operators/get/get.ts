import { isArray, isMap, isNil, isNumber, isPlainObject } from '../../utils';

type PropertyType<T, Path extends string> = Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? PropertyType<T[K], R>
    : never
  : never;

export const get =
  <P extends string>(path: P, defaultValue: any = null) => <S>(source: S): PropertyType<S, P> => {
    const paths = path
      .split('.')
      .map((value) => {
        let matches = /([a-z]+)(\[([0-9]+)\]){0,1}/.exec(value);
        const result: any = [];
        if (!matches) {
          matches = /([0-9]+)/.exec(value);
          if (!matches) {
            return result;
          }

          matches[1] = parseInt(matches[1]) as any;
        }

        result.push(matches[1]);
        if (matches[3] !== undefined) {
          result.push(parseInt(matches[3]));
        }

        return result;
      })
      .flat();

    if (paths.length === 0) {
      return defaultValue;
    }

    let value: any = source;
    while (paths.length > 0) {
      const path = paths.shift();
      switch (true) {
        case isPlainObject(value):
        case isArray(value):
          value = value[path as any];
          break;

        case isMap(value):
          const firstKey = value.keys().next().value;
          if (isNumber(firstKey)) {
            value = value.get(parseInt(path));
          } else {
            value = value.get(path);
          }
          break;
      }

      if (isNil(value)) {
        value = defaultValue;
        break;
      }
    }

    return value;
  };
