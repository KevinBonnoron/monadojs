const propImpl = <T, P extends keyof T>(value: T, property: P) => value[property];

export const prop =
  <P>(property: P) =>
  <T>(value: T) =>
    propImpl(value, property as keyof T);
