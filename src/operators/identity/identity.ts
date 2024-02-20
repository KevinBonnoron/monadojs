/**
 * This function is used as default for some operators. It's purpose is to return the passed value
 * @returns
 */
export const identity =
  () =>
  <S>(source: S) =>
    source;
