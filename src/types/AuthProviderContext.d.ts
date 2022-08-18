import { AuthProvider as IAuthProvider, UserCredential } from "firebase/auth";
import { User } from "./User";

type authProviderFn = {
  (email: string, password: string): Promise<UserCredential>;
}

export interface AuthProviderContext {
  user: User;
  logOut(): Promise<void>;
  logIn: authProviderFn;
  signup: authProviderFn;
  logInWithProvider(provider: IAuthProvider): Promise<UserCredential>;
}
