import React from 'react';
import { Navigate } from 'react-router-dom';
import { ComponentWithChild } from '../../types/ComponentWithChild';
import { useAuth } from '../hooks';

export function ProtectedRoute({ children }: ComponentWithChild) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <>
      {' '}
      {children}
    </>
  );
}
