export const replace = <S extends string>(search: string | RegExp, replacement: string) => (source: S) => source.replace(search, replacement);
