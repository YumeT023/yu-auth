import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { SocialSignIn } from './SocialSignin';
// import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '../../../common/components/Forms';
import { useAuth } from '../../../utils/hooks';
import { AuthError } from '../../../types/FirebaseError';
import { decodeFirebaseError } from '../../../utils/function';
// import { useAuthProvider } from '../../../Providers/useAuthProvider';

type PayLoadType = {
  email: string;
  password: string;
};

export function Sign() {
  const [sign, setSign] = useState<'in' | 'up'>('in');
  const { logIn, signup } = useAuth();
  const [error, setError] = useState<AuthError | null>();
  const navigate = useNavigate();
  const [payload, setPayload] = useState<PayLoadType>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (error) {
      toast.error(decodeFirebaseError(error));
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload(() => ({ ...payload, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { email, password } = payload;
    if (sign === 'in') {
      await logIn(email, password)
        .then(() => {
          navigate('/home');
        })
        .catch((authError) => setError(authError));
    } else {
      await signup(email, password)
        .then(() => {
          navigate('/home');
        })
        .catch((authError) => setError(authError));
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

      <Button
        label={sign === 'in' ? 'LOGIN' : 'REGISTER'}
        type="submit"
        color="secondary"
        className="xeno-bg"
        expand="block"
      />

      {sign === 'in' ? (
        <p className="no-default-btn-style">
          don&apos;t have an account yet ?
          <button type="button" onClick={() => setSign('up')}>
            sign up here
          </button>
        </p>
      ) : (
        <p className="no-default-btn-style">
          Already have an account ?
          <button type="button" onClick={() => setSign('in')}>
            sign in here
          </button>
        </p>
      )}

      <SocialSignIn />
    </form>
  );
}
