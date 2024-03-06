// LoginView.tsx

import React from 'react';
import { LoginData } from '@/app/api';
import Link from 'next/link';
import styled from 'styled-components';
import { Input, Button, Card, Title, Text, colors } from '@/app/styles/styles';


// Styled components
const LoginCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 2rem auto;
  align-items: center;
  align-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;

  gap: 1rem;
`;

const FormLabel = styled.label`
  display: block;
`;

const ForgotPasswordLink = styled.a`
  color: ${() => colors.info};
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

// Props interface remains unchanged
interface Props {
  loginData: LoginData;
  setLoginData: (loginData: LoginData) => void;
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  message: string | null;
}

const LoginView: React.FC<Props> = ({ loginData, setLoginData, handleLogin, message }) => (
  <LoginCard>
    <Title>Login</Title>
    <LoginForm onSubmit={handleLogin}>
      <FormLabel>
        <Text>Username:</Text>
        <Input
          type="text"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
        />
      </FormLabel>
      <FormLabel>
        <Text>Password:</Text>
        <Input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
      </FormLabel>
      <Button type="submit">Login</Button>
      {message && <Text>{message}</Text>}
    </LoginForm>
    <Link href="/passwordResetLinkRequestPage" passHref>
      Forgot Password?
    </Link>
  </LoginCard>
);

export default LoginView;
