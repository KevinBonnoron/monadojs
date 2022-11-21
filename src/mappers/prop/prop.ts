export const prop =
  <T, P extends keyof T>(property: P) =>
  (value: T) =>
    value[property];
