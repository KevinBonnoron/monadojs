import { propIn } from '../prop-in/prop-in';

export const haveSameProperties = (o1: any, o2: any) => propIn(o2, ...Object.keys(o1)) && propIn(o1, ...Object.keys(o2));
