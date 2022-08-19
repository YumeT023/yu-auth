import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { FormWrapper } from './components/FormWrapper';
import { Sign } from './components/Sign';
import { auth } from '../../conf/firebase';
import { Header } from '../Home/components/Header';
import '../assets/css/auth.css';

export function Auth() {
  // const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate('/');
      }
    });
  }, []);

  return (
    <div className="h-100 main__form">
      <Header>
        <button className="home__header__btn">
          yu-auth
        </button>
      </Header>
      <FormWrapper>
        <Sign />
      </FormWrapper>
    </div>
  );
}
