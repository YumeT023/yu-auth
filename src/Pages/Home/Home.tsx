import React from 'react';
// import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { AuthError } from '../../types/FirebaseError';
// import { decodeFirebaseError } from '../../utils/function';
import { useAuth } from '../../utils/hooks';

export function Home() {
  // const navigate = useNavigate();
  // const { logOut } = useAuth();

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //     navigate('/auth');
  //   } catch (error) {
  //     toast.error(decodeFirebaseError(error as AuthError));
  //   }
  // };

  return (
    <div>
      <h1>Welcome</h1>
      {/* <button type="button" onClick={handleLogOut}> */}
        {/* Log out */}
      {/* </button> */}
    </div>
  );
}
