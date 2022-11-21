export const substring =
  (start: number, length?: number) =>
  <T extends string>(values: T) =>
    values.substring(start, length !== undefined ? start + length : undefined);
