/**
 * This function is used as default for some operators. It's purpose is to return the passed value
 * @returns
 */
export function identity(): <S>(source: S) => S {
  return <S>(source: S) => source;
}
