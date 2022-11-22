export const prop =
  (property: string) =>
  <T extends object, P extends keyof T>(value: T) =>
    value[property as P];
