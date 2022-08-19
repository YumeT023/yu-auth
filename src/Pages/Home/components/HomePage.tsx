import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../../conf/firebase';
import { User } from '../../../types/User';
import '../../assets/css/home.css';

export function HomePage() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="home__page">
      <h1>
        Welcome
        {user ? `       ${user.displayName}` : ''}
      </h1>
    </div>
  );
}
