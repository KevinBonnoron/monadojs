import { props } from './props';

describe('props', () => {
  it('should return object properties', () => {
    expect(props('name')({ name: 'value' })).toEqual(['value']);
    expect(props('name')([{ name: 'value' }])).toEqual([['value']]);
    expect(props('name')([{ name: 'value1' }, { name: 'value2' }])).toEqual([['value1'], ['value2']]);
    expect(props('name')([])).toEqual([]);
    expect(props('name')({} as any)).toEqual([]);
    expect(props('notFound')({ name: 'value' } as any)).toEqual([]);
    expect(props('notFound')([{ name: 'value' }] as any)).toEqual([[]]);
  });
});
