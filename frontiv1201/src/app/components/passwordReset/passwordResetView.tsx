// PasswordResetView.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Card, Text } from '@/app/styles/styles'; // Adjust the import path as per your setup

// Styled components specific to PasswordResetView
const ResetCard = styled(Card)`
  max-width: 400px;
  margin: 2rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
    color: #333;
  margin-bottom: 5px;
`;

const ResetButton = styled(Button)`
  margin-top: 10px;
`;

const MessageText = styled(Text)`
  margin-top: 10px;
`;

type PasswordResetViewProps = {
  onResetPassword: (token: string, newPassword: string) => void;
  message: string | null;
};

/**
 * View for password reset
 * @param onResetPassword - function to reset password
 * @param message - success or error message
 * @returns - a view for password reset
 */

const PasswordResetView: React.FC<PasswordResetViewProps> = ({ onResetPassword, message }) => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword(token, newPassword);
  };

  return (
    <ResetCard>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>Reset Token:</Label>
          <Input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
        </FormField>
        <FormField>
          <Label>New Password:</Label>
          <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </FormField>
        <ResetButton type="submit">Reset Password</ResetButton>
      </Form>
      {message && <MessageText>{message}</MessageText>}
    </ResetCard>
  );
};

export default PasswordResetView;
