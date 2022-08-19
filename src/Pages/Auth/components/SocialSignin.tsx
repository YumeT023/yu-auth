import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthError } from '../../../types/FirebaseError';
import { useAuth, useGetAuthProvider } from '../../../utils/hooks';
import { decodeFirebaseError } from '../../../utils/function';

const providers = ['github', 'facebook', 'google'];

export function SocialSignIn() {
  const { github, facebook, google } = useGetAuthProvider();
  const { logInWithProvider } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState<AuthError | null>();
  const buttonClassName = 'form__social__button';

  useEffect(() => {
    if (error) {
      toast.error(decodeFirebaseError(error));
    }
  }, [error]);

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>, provider: string) => {
    e.preventDefault();
    e.stopPropagation();
    let providerInstance;

    switch (provider) {
      case 'github':
        providerInstance = github;
        break;
      case 'facebook':
        providerInstance = facebook;
        break;
      case 'google':
        providerInstance = google;
        break;
      default:
        throw new Error(`no provider corresponding to ${provider}`);
    }

    await logInWithProvider(providerInstance)
      .then(() => navigate('/'))
      .catch((authError) => setError(authError));
  };

  return (
    <div className="form__social">
      {providers.map((provider) => (
        <button type="submit" className={buttonClassName} key={provider} onClick={(e) => handleSignIn(e, provider)}>
          <i className={`fab fa-${provider}`} />
        </button>
      ))}
    </div>
  );
}
