import { person } from '../../../tests/test.data';
import { pick } from './pick';

const personWithId: { id: number } = pick('id')(person);
const personWithName: { name: string } = pick('name')(person);
const personWithBirthDate: { birthDate: Date } = pick('birthDate')(person);
const personWithIdAndName: { id: number; name: string } = pick('id', 'name')(person);
const personWithIdAndNameAndBirthDate: { id: number; name: string; birthDate: Date } = pick('id', 'name', 'birthDate')(person);

// @ts-expect-error
pick('id')({ noId: 0 });
// @ts-expect-error
pick('Id')(person);
