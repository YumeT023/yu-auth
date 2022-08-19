import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ComponentWithChild } from '../../types/ComponentWithChild';
import { auth } from '../../conf/firebase';

export function ProtectedRoute({ children }: ComponentWithChild) {
  const navigate = useNavigate();

  // use of onAuthStateChanged instead of useAuth for speed rendering
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/auth');
      }
    });
  }, []);

  return (
    <>
      {' '}
      {children}
    </>
  );
}
