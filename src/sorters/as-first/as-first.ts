import { Sorter } from '../../types';
import { sorter } from '../../utils';

export const asFirst = <T>(value: unknown): Sorter<T> => sorter((a: T, b: T) => (a !== b ? (a === value ? -1 : b === value ? 1 : 0) : 0));
