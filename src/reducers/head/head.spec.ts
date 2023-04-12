import { describe, expect, it } from 'vitest';
import { head } from './head';

describe('head', () => {
  it('should return head of array', () => {
    expect([0, 1, 2].reduce(head())).toStrictEqual([0]);
    expect([0, 1, 2].reduce(head(2))).toStrictEqual([0, 1]);
    expect([0, 1, 2].reduce(head(3))).toStrictEqual([0, 1, 2]);
    expect([0, 1, 2].reduce(head(4))).toStrictEqual([0, 1, 2]);
    expect([null, 1, 2].reduce(head())).toStrictEqual([null]);
    expect([undefined, 1, 2].reduce(head())).toStrictEqual([undefined]);
  });
});
