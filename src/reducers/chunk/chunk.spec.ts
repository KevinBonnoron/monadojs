import { describe, expect, it } from 'vitest';
import { chunk } from './chunk';

const ONE_ELEMENT = [0];
const TEN_ELEMENTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const NINE_ELEMENTS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

describe('chunk', () => {
  it('should compute default chunk from array', () => {
    const operator = chunk();
    expect(ONE_ELEMENT.reduce(operator)).toStrictEqual(0);
    expect(NINE_ELEMENTS.reduce(operator)).toStrictEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    expect(TEN_ELEMENTS.reduce(operator)).toStrictEqual([
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
    ]);
  });

  it('should compute chunk 1 from array', () => {
    const operator = chunk(1);
    expect(ONE_ELEMENT.reduce(operator)).toStrictEqual(0);
    expect(NINE_ELEMENTS.reduce(operator)).toStrictEqual([[0], [1], [2], [3], [4], [5], [6], [7], [8]]);
    expect(TEN_ELEMENTS.reduce(operator)).toStrictEqual([[0], [1], [2], [3], [4], [5], [6], [7], [8], [9]]);
  });

  it('should compute chunk 3 from array', () => {
    const operator = chunk(3);
    expect(ONE_ELEMENT.reduce(operator)).toStrictEqual(0);
    expect(NINE_ELEMENTS.reduce(operator)).toStrictEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    expect(TEN_ELEMENTS.reduce(operator)).toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]);
  });

  it('should compute chunk 4 from array', () => {
    const operator = chunk(4);
    expect(ONE_ELEMENT.reduce(operator)).toStrictEqual(0);
    expect(NINE_ELEMENTS.reduce(operator)).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    expect(TEN_ELEMENTS.reduce(operator)).toStrictEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9],
    ]);
  });
});
