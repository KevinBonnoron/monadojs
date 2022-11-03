export const replace =
  <T extends string>(search: string | RegExp, replacement: string) =>
  (values: T) =>
    values.replace(search, replacement);
