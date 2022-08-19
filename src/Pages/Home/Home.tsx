import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../../common/components/Global';
import { AuthError } from '../../types/FirebaseError';
import { decodeFirebaseError } from '../../utils/function';
import { useAuth } from '../../utils/hooks';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

export function Home() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<AuthError | null>();

  useEffect(() => {
    if (error) {
      toast.error(decodeFirebaseError(error));
    }
  }, [error]);

  const handleLogOut = async () => {
    await logOut()
      .then(() => {
        navigate('/auth');
      })
      .catch((authError) => setError(authError));
  };

  return (
    <Wrapper>
      <Header>
        <button className="home__header__btn" onClick={handleLogOut}>
          Logout
          <i className="fas fa-door-open" />
        </button>
      </Header>
      <HomePage />
    </Wrapper>
  );
}
