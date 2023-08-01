export const replace = (search: string | RegExp, replacement: string) => <S extends string>(source: S) => source.replace(search, replacement);
