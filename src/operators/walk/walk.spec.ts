import { identity } from '../identity/identity';
import { walk } from './walk';

describe('walk', () => {
  it('should walk through object', () => {
    expect(walk<any>(identity)({ a: 1, b: { c: 2, d: { e: 3 } } })).toStrictEqual({ a: 1, b: { c: 2, d: { e: 3 } } });
  });

  it('should walk through object having circular reference', () => {
    const child = { b: 2, parent: {} };
    const parent = { a: 1, child };
    child.parent = parent;
    expect(walk<any>(identity)(parent)).toStrictEqual(parent);
  });
});
