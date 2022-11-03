import { identity } from '../identity/identity';
import { walk } from './walk';

describe('walk', () => {
  it('should walk through object', () => {
    expect(walk<any>(identity)({ a: 1, b: { c: 2, d: { e: 3 } } })).toStrictEqual({ a: 1, b: { c: 2, d: { e: 3 } } });
  });
});
