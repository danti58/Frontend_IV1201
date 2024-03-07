// index.tsx
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Title, Text, Button } from '@/app/styles/styles'; // Update this path to where your styles.ts file is actually located
import { colors } from '@/app/styles/styles';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  text-align: center;
`;

const WelcomeMessage = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const RegisterLink = styled.p`
  color: ${() => colors.primary};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${() => colors.info};
  }
`;

/**
 * Home page component
 * 
 * @returns - Home page component
 */
export default function Home() {
  const userState = useSelector((state: any) => state.auth.userState);

  return (
    <Container>
      <Main>
        <Title>Recruitment app Group 7</Title>

        <WelcomeMessage>
          {userState.username ? `Welcome, ${userState.username}` : 'To access this app, please login or register.'}
        </WelcomeMessage>

        {!userState.username && (
          <Link href="/register" passHref>
            <RegisterLink>Register here</RegisterLink>
          </Link>
        )}
      </Main>
    </Container>
  );
}
