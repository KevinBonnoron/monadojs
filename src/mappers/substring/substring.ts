export const substring = <S extends string>(start: number, length?: number) => (source: S) => source.substring(start, length !== undefined ? start + length : undefined);
