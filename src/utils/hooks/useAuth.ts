import { useContext } from 'react';
import { AuthContext } from '../../providers';
import { AuthProviderContext } from '../../types/AuthProviderContext';

export const useAuth = () => (
  useContext(AuthContext) as AuthProviderContext
);
