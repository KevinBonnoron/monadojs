export const substring =
  (start: number, length?: number) =>
  <T extends string>(value: T) =>
    value.substring(start, length !== undefined ? start + length : undefined);
