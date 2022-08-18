import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { useMemo } from 'react';

export const useGetAuthProvider = () => {
  const providers = useMemo(() => ({
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider(),
  }), []);

  return providers;
};
