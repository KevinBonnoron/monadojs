export type ObjectPath<T, P extends string | number> = P extends '' // Last element
  ? T
  : // Access array element
    P extends `[${infer I extends number & keyof T}]${infer Rest}`
    ? ObjectPath<T[I], Rest>
    : // Access sub property element
      P extends `.${infer K extends string & keyof T}${infer Rest}`
      ? ObjectPath<T[K], Rest>
      : // Access property element
        P extends `${infer Key extends string & keyof T}.${infer Rest}`
        ? ObjectPath<T[Key], `.${Rest}`>
        : P extends `${infer Key extends string & keyof T}[${infer Rest}`
          ? ObjectPath<T[Key], `[${Rest}`>
          : P extends keyof T
            ? T[P]
            : // Default
              never;
