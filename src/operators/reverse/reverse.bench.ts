import { bench, describe } from 'vitest';
import { NUMBER_ARRAY, NUMBER_SET, STRING_MAP } from '../../../tests/test.data';
import { reverse } from './reverse';

describe('reverse', () => {
  bench('Array', () => {
    const source = NUMBER_ARRAY;
    reverse()(source);
  });

  bench('Set', () => {
    const source = NUMBER_SET;
    reverse()(source);
  });

  bench('Map', () => {
    const source = STRING_MAP;
    reverse()(source);
  });
});
