export const prop =
  <T extends object = any, P extends keyof T = any>(property: P, defaultValue?: any) =>
  (values: T) =>
    values[property] ?? defaultValue;
