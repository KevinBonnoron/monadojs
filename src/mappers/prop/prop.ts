export const prop =
  <T extends object = any, P extends keyof T = any>(property: P) =>
  (values: T) =>
    values[property];
