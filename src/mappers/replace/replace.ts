export const replace =
  (search: string | RegExp, replacement: string) =>
  <T extends string>(values: T) =>
    values.replace(search, replacement);
