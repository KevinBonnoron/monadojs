export const substring =
  (start: number, length?: number) =>
  <T extends string>(source: T) =>
    source.substring(start, length !== undefined ? start + length : undefined);
