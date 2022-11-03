export const prop =
  <T extends object, P extends keyof T>(property: P) =>
  (value: T) =>
    value[property];
