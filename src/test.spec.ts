import './index';
import { reduce, tap } from './operators';

interface DateLabelCount {
  date: string;
  label: string;
  count: number;
}

describe('test', () => {
  it('should do complex test', () => {
    const values: DateLabelCount[] = [
      { date: '2020-01', label: 'other', count: 1 },
      { date: '2020-01', label: 'google', count: 13 },
      { date: '2020-02', label: 'other', count: 2 },
      { date: '2020-02', label: 'google', count: 14 },
      { date: '2020-03', label: 'other', count: 3 },
      { date: '2020-03', label: 'google', count: 15 },
      { date: '2020-04', label: 'other', count: 4 },
      { date: '2020-04', label: 'google', count: 16 },
      { date: '2020-05', label: 'other', count: 5 },
      { date: '2020-05', label: 'google', count: 17 },
      { date: '2020-06', label: 'other', count: 6 },
      { date: '2020-06', label: 'google', count: 18 },
      { date: '2020-07', label: 'other', count: 7 },
      { date: '2020-07', label: 'google', count: 19 },
      { date: '2020-08', label: 'other', count: 8 },
      { date: '2020-08', label: 'google', count: 20 },
      { date: '2020-09', label: 'other', count: 9 },
      { date: '2020-09', label: 'google', count: 21 },
      { date: '2020-10', label: 'other', count: 10 },
      { date: '2020-10', label: 'google', count: 22 },
      { date: '2020-11', label: 'other', count: 11 },
      { date: '2020-11', label: 'google', count: 23 },
      { date: '2020-12', label: 'other', count: 12 },
      { date: '2020-12', label: 'google', count: 24 },
    ];

    const labelCountDateSumReducer = (accumulator: DateLabelCount[], value: DateLabelCount) => {
      let matchElement = accumulator.find((element: DateLabelCount) => element.date === value.date);
      if (matchElement === undefined) {
        matchElement = {
          ...value,
          count: 0,
        };

        accumulator.push(matchElement);
      }

      matchElement.count += value.count;
      return accumulator;
    };

    const results = values.pipe(
      //filter(pipe(prop('label'), eq('other'))),
      reduce(labelCountDateSumReducer, []),
      tap(console.log)
    );
  });
});
