import { person } from '../../../tests/test.data';
import { exclude } from './exclude';

const personWithoutId: { name: string; birthDate: Date } = exclude('id')(person);
const personWithoutName: { id: number; birthDate: Date } = exclude('name')(person);
const personWithoutBirthDate: { id: number; name: string } = exclude('birthDate')(person);
const personWithoutIdAndName: { birthDate: Date } = exclude('id', 'name')(person);
const personWithoutIdAndNameAndBirthDate: {} = exclude('id', 'name', 'birthDate')(person);

// @ts-expect-error
exclude('id')({ noId: 0 });
// @ts-expect-error
exclude('Id')(person);
