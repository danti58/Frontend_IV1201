// components/PasswordResetLinkRequestPresenter.tsx
import React, { useState } from 'react';
import PasswordResetLinkRequestView from './passwordResetLinkRequestView';
import { requestPasswordResetLink } from '@/app/api';
import { useRouter } from 'next/router';

const PasswordResetLinkRequestPresenter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const resetPasswordLinkRequest = async () => {
    try {
      const response = await requestPasswordResetLink(email);
      console.log('password reset token:', response.token);
      setMessage('Password reset link sent successfully');
      // Navigate to the password reset page
      router.push('/passwordResetPage');
    } catch (error) {
        console.warn('Failed to reset password', error);
        onResetPasswordLinkRequestError(error);
    }
  };

    function onResetPasswordLinkRequestError(error: any) {
        console.error('Failed to reset password', error);
        if(error.request.status === 0){
            setMessage('Server is down');
        }
        else if (error.request.status === 500){
            setMessage('Cannot connect to database');
        }
        else if (error.request.status === 404) {
            setMessage('Person not found');
        }
        else {
            setMessage('Failed to send password reset link');
        }
    }

  const onEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  return <PasswordResetLinkRequestView email={email} message={message} onEmailChange={onEmailChange} onSubmit={resetPasswordLinkRequest} />;
};

export default PasswordResetLinkRequestPresenter;
