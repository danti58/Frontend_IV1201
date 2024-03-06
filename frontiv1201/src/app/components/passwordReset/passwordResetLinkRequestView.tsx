// PasswordResetLinkRequestView.tsx

import React from 'react';
import styled from 'styled-components';
import { Input, Button, Card, Text } from '@/app/styles/styles'; // Update the import path according to your project structure

// Styled components for this view
const PasswordResetCard = styled(Card)`
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

const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

const MessageText = styled(Text)`
  margin-top: 10px;
`;

type PasswordResetLinkRequestViewProps = {
  email: string;
  message: string | null;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
};

const PasswordResetLinkRequestView: React.FC<PasswordResetLinkRequestViewProps> = ({
  email,
  message,
  onEmailChange,
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <PasswordResetCard>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            required
          />
        </FormField>
        <SubmitButton type="submit">Send Reset Link</SubmitButton>
        {message && <MessageText>{message}</MessageText>}
      </Form>
    </PasswordResetCard>
  );
};

export default PasswordResetLinkRequestView;
