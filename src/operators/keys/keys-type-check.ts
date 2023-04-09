import { keys } from './keys';

const numberArrayEntries: IterableIterator<number> = keys()([1, 2, 3]);
const objectArrayEntries: IterableIterator<number> = keys()([{ id: 1 }, { id: 2 }, { id: 3 }]);

const numberSetEntries: IterableIterator<number> = keys()(new Set([1, 2, 3]));
const objectSetEntries: IterableIterator<number> = keys()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]));

const numberMapEntries: IterableIterator<number> = keys()(
  new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ])
);
const objectMapEntries: IterableIterator<number> = keys()(
  new Map([
    [1, { id: 1 }],
    [2, { id: 2 }],
    [3, { id: 3 }],
  ])
);

const numberObjectEntries: IterableIterator<number> = keys()({ 1: 'a', 2: 'b', 3: 'c' });
