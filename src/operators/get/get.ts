import { accessor } from '../../utils/object/accessor/accessor';

export const get = <P extends string>(path: P, defaultValue?: unknown) => <S extends Record<PropertyKey, unknown>>(source: S) => accessor(source, path).get(defaultValue as any);
