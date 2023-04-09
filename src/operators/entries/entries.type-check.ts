import { entries } from './entries';

const numberArrayEntries: IterableIterator<[number, number]> = entries()([1, 2, 3]);
const objectArrayEntries: IterableIterator<[number, { id: number }]> = entries()([{ id: 1 }, { id: 2 }, { id: 3 }]);

const numberSetEntries: IterableIterator<[number, number]> = entries()(new Set([1, 2, 3]));
const objectSetEntries: IterableIterator<[number, { id: number }]> = entries()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]));

const numberMapEntries: IterableIterator<[number, string]> = entries()(
  new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ])
);
const objectMapEntries: IterableIterator<[number, { id: number }]> = entries()(
  new Map([
    [1, { id: 1 }],
    [2, { id: 2 }],
    [3, { id: 3 }],
  ])
);

const numberObjectEntries: IterableIterator<[number, string]> = entries()({ 1: 'a', 2: 'b', 3: 'c' });
