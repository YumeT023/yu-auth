import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { SocialSignIn } from './SocialSignin';
// import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '../../../common/components/Forms';
// import { useAuthProvider } from '../../../Providers/useAuthProvider';

type PayLoadType = {
  email: string;
  password: string;
};

export function Form() {
  // const { doSignInWithEmailAndPassword } = useAuthProvider();
  const navigate = useNavigate();
  const [payload, setPayload] = useState<PayLoadType>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload(() => ({ ...payload, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { email, password } = payload;
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      if ((error as any).code === 'auth/wrong-password') {
        toast.error('Please check the Password');
      }
      if ((error as any).code === 'auth/user-not-found') {
        toast.error('Please check the Email');
      }
    }
  };

  return (
    <form className="auth__form" spellCheck={false} onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="email"
        name="email"
        lineColor="xeno"
        autoComplete="email"
        value={payload.email}
        onChange={handleChange}
      />

      <TextField
        type="password"
        placeholder="password"
        name="password"
        lineColor="xeno"
        autoComplete="current-password"
        value={payload.password}
        onChange={handleChange}
      />

      <Button label="CONNEXION" type="submit" color="secondary" className="xeno-bg" />

      <SocialSignIn />
    </form>
  );
}
