import { propIn } from '../prop-in/prop-in';

export const haveSameSymbols = (o1: any, o2: any) =>
  propIn(o2, ...Object.getOwnPropertySymbols(o1)) && propIn(o1, ...Object.getOwnPropertySymbols(o2));
