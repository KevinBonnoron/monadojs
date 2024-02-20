import { cloneObject } from '../../utils/object/clone-object/clone-object';

export const clone =
  () =>
  <S>(source: S): S =>
    cloneObject(source);
