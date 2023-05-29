import { Maybe } from '../../../types';
import { propIn } from '../prop-in/prop-in';

export const isMaybe = (value: unknown): value is Maybe => propIn<Maybe>(value, 'pipe', 'isJust', 'isNothing', 'equals');
