import { prop } from './prop';

describe('prop', () => {
  it('should return object property', () => {
    expect([{ name: 'value' }].map(prop('name'))).toStrictEqual(['value']);
  });
});
