import { bench, describe } from 'vitest';
import { NUMBER_ARRAY, NUMBER_SET, STRING_MAP } from '../../../tests/test.data';
import { pop } from './pop';

describe('pop', () => {
  bench('Array', () => {
    const source = NUMBER_ARRAY;
    pop()(source);
  });

  bench('Set', () => {
    const source = NUMBER_SET;
    pop()(source);
  });

  bench('Map', () => {
    const source = STRING_MAP;
    pop()(source);
  });
});
