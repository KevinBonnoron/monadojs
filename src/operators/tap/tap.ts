export const tap =
  (fn: Function) => <S>(source: S) => {
    fn(source);
    return source;
  };
