import { prop } from './prop';

describe('prop', () => {
  it('should return object property', () => {
    expect(prop('name')({ name: 'value' })).toEqual('value');
    expect(prop('name')([{ name: 'value' }])).toEqual(['value']);
    expect(prop('name')([{ name: 'value1' }, { name: 'value2' }])).toEqual(['value1', 'value2']);
    expect(prop('name')([])).toEqual([]);
    expect(prop('name')({} as any)).toEqual(undefined);
    expect(prop('notFound')({ name: 'value' } as any)).toEqual(undefined);
    expect(prop('notFound')([{ name: 'value' }] as any)).toEqual([]);
  });
});
