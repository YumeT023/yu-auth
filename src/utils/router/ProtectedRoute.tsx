import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../conf/firebase';
import { ComponentWithChild } from '../../types/ComponentWithChild';

export function ProtectedRoute({ children }: ComponentWithChild) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/auth');
      }
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <>
      {' '}
      {children}
    </>
  );
}
