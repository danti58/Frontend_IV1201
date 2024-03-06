// components/PasswordResetLinkRequestPresenter.tsx
import React, { useState } from 'react';
import PasswordResetLinkRequestView from './passwordResetLinkRequestView';
import { requestPasswordResetLink } from '@/app/api';
import { useRouter } from 'next/router';

/**
 * Presenter component for the password reset link request page, handles the password reset link request logic and passes the data to the view component.
 * 
 * @returns  - Password reset link request view component
 */

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
      setMessage('Failed to send password reset link');
    }
  };

  const onEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  return <PasswordResetLinkRequestView email={email} message={message} onEmailChange={onEmailChange} onSubmit={resetPasswordLinkRequest} />;
};

export default PasswordResetLinkRequestPresenter;
