import { isNil } from '../is-nil/is-nil';

export const coalesce = (...values: unknown[]) => values.find((value) => !isNil(value));
