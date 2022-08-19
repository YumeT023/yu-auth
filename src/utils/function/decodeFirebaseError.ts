import { AuthError } from '../../types/FirebaseError';

export const decodeFirebaseError = ({ code }: AuthError) => {
  const [, type] = code.split('/');
  return type.replaceAll('-', ' ');
};
