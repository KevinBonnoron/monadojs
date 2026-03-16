import { cloneObject } from '../../utils/object/clone-object/clone-object';

export function clone(): <S>(source: S) => S {
  return <S>(source: S): S => cloneObject(source);
}
