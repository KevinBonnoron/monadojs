import { heads } from './heads';

describe('heads', () => {
  it('should return heads of array', () => {
    expect([0, 1, 2].reduce(heads())).toStrictEqual([0]);
    expect([0, 1, 2].reduce(heads(2))).toStrictEqual([0, 1]);
    expect([0, 1, 2].reduce(heads(3))).toStrictEqual([0, 1, 2]);
    expect([0, 1, 2].reduce(heads(4))).toStrictEqual([0, 1, 2]);
    expect([null, 1, 2].reduce(heads())).toStrictEqual([null]);
    expect([undefined, 1, 2].reduce(heads())).toStrictEqual([undefined]);
  });
});
