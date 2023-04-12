import { bench, describe } from 'vitest';
import { NUMBER_ARRAY, NUMBER_SET, STRING_MAP } from '../../../tests/test.data';
import { unique } from './unique';

describe('unique', () => {
  bench('Array', () => {
    const source = NUMBER_ARRAY;
    unique()(source);
  });

  bench('Set', () => {
    const source = NUMBER_SET;
    unique()(source);
  });

  bench('Map', () => {
    const source = STRING_MAP;
    unique()(source);
  });
});
