import { Maybe } from '../../../types';
import { propIn } from '../prop-in/prop-in';

export const isMaybe = (value: any): value is Maybe => propIn<Maybe>(value, 'pipe', 'isJust', 'isNothing', 'equals');
