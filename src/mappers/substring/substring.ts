export const substring =
  (start: number, length?: number) => <S extends string>(source: S) => source.substring(start, length !== undefined ? start + length : undefined);
