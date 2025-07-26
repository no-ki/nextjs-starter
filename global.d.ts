type anynumber = number | string | bigint;

type Maybe<T> = T | null | undefined;

type PartialNull<T> = {
  [P in keyof T]: Maybe<T[P]>;
};
