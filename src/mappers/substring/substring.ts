export const substring =
  <T extends string>(start: number, length?: number) =>
  (values: T) =>
    values.substring(start, length !== undefined ? start + length : undefined);
