import { values } from './values';

const numberArrayEntries: IterableIterator<number> = values()([1, 2, 3]);
const objectArrayEntries: IterableIterator<{ id: number }> = values()([{ id: 1 }, { id: 2 }, { id: 3 }]);

const numberSetEntries: IterableIterator<number> = values()(new Set([1, 2, 3]));
const objectSetEntries: IterableIterator<{ id: number }> = values()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]));

const numberMapEntries: IterableIterator<string> = values()(
  new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ])
);
const objectMapEntries: IterableIterator<{ id: number }> = values()(
  new Map([
    [1, { id: 1 }],
    [2, { id: 2 }],
    [3, { id: 3 }],
  ])
);

const numberObjectEntries: IterableIterator<string> = values()({ 1: 'a', 2: 'b', 3: 'c' });
