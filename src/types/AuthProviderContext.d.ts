import { AuthProvider as IAuthProvider, UserCredential } from 'firebase/auth';
import { User } from './User';

// @ts-nocheck
type authProviderFn = {
  (email: string, password: string): Promise<UserCredential>;
}

export interface AuthProviderContext {
  user: User;
  setLoading(value: boolean): void;
  logOut(): Promise<void>;
  logIn: authProviderFn;
  signup: authProviderFn;
  logInWithProvider(provider: IAuthProvider): Promise<UserCredential>;
}
