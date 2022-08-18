import React, { useEffect, useMemo, useState } from 'react';
import {
  AuthProvider as IAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../conf/firebase';
import { ComponentWithChild } from '../types/ComponentWithChild';
import { User } from '../types/User';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: ComponentWithChild) {
  const [user, setUser] = useState<User>(null);

  const signup = (email: string, password: string) => (
    createUserWithEmailAndPassword(auth, email, password)
  );

  const logIn = (email: string, password: string) => (
    signInWithEmailAndPassword(auth, email, password)
  );

  const logOut = () => (
    signOut(auth)
  );

  const logInWithProvider = (provider: IAuthProvider) => (
    signInWithPopup(auth, provider)
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const userAuth = useMemo(() => ({
    user,
    signup,
    logIn,
    logOut,
    logInWithProvider,
  }), [user]);

  return (
    <AuthContext.Provider value={userAuth}>
      {children}
    </AuthContext.Provider>
  );
}
