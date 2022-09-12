import { capitalize, combine, compose, encloseIn, eq, filter, gt, map, or, prop, reduce, slice, tap } from './index';

describe('', () => {
  it('', () => {
    interface Value {
      rank: number;
      keyword: string;
    }
    const values: Value[] = [
      { rank: 1, keyword: 'toulouse' },
      { rank: 2, keyword: 'paris' },
      { rank: 3, keyword: 'bordeaux' },
      { rank: 4, keyword: 'nantes' },
    ];

    const takeRankAndKeywordCapitalizedAndEncloseInElements = map<Value, any>(compose(combine(prop('rank'), compose(prop('keyword'), capitalize())), encloseIn('elements')));

    const t = values.pipe(filter(compose(prop('rank'), or(gt(2), eq(1)))), takeRankAndKeywordCapitalizedAndEncloseInElements, reduce(slice(0, 5)), tap(console.log));
  });
});
