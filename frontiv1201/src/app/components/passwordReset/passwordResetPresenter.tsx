import React, { useState } from 'react';
import PasswordResetView from './passwordResetView';
import { resetPassword } from '@/app/api';
import { useRouter } from 'next/router';
import { on } from 'events';

/**
 * Presenter component for the password reset page, handles the password reset logic and passes the data to the view component.
 * 
 * @returns  - Password reset view component
 */

const PasswordResetPresenter: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();
  async function reset (token: string, newPassword: string){
    try {
      const response = await resetPassword(token, newPassword);
      console.log('response:', response);
      onResetPasswordSuccess();
    } catch (error) {
        console.warn('Failed to reset password', error);
        onResetPasswordFailure();
    }
  };

  const onResetPasswordSuccess = () => {
    setMessage('Password reset successfully');
  }

  const onResetPasswordFailure = () => {
    setMessage('Failed to reset password');
  }



  return <PasswordResetView onResetPassword={reset} message={message} />;
};

export default PasswordResetPresenter;
