import { lower } from '../lower/lower';
import { plus } from '../plus/plus';
import { upper } from '../upper/upper';
import { transform } from './transform';

describe('transform', () => {
  it('should transform object', () => {
    expect(transform({ a: upper(), b: lower(), c: { d: plus(1) } })({ a: 'abc', b: 'DEF', c: { d: 1 } })).toStrictEqual({ a: 'ABC', b: 'def', c: { d: 2 } });
  });
});
