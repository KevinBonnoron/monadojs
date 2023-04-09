import { get } from './get';

const source = {
  a: {
    b: {
      c: 5,
    },
  },
};

const a: { b: { c: number } } = get('a')(source);
const b: { c: number } = get('b')(source);
const c: number = get('a.b.c')(source);

// TODO check for array access get('d[0]')(source)
