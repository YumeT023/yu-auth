import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../utils/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import '../assets/css/auth.css';
import { FormWrapper } from './components/FormWrapper';
import { Sign } from './components/Sign';
import { auth } from '../../conf/firebase';

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
      <FormWrapper>
        <Sign />
      </FormWrapper>
    </div>
  );
}
