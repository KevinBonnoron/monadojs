import { head } from './head';

describe('head', () => {
  it('should return head of array', () => {
    expect([0, 1, 2].reduce(head())).toStrictEqual(0);
    expect([null, 1, 2].reduce(head())).toStrictEqual(null);
    expect([undefined, 1, 2].reduce(head())).toStrictEqual(undefined);
  });
});
