import { cloneObject } from '../../utils/object/clone-object/clone-object';

export function clone() {
  return <S>(source: S): S => cloneObject(source);
}
