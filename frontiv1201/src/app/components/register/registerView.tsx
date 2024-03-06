// RegisterView.tsx

import React from 'react';
import { RegisterData } from '@/app/api';
import Link from 'next/link';
import styled from 'styled-components';
import { Input, Button, Card, Title, Text } from '@/app/styles/styles'; // Adjust the import path if needed

const RegisterForm = styled(Card)`
display: flex;
flex-direction: column;  
max-width: 400px;
  margin: 2rem auto;
  align-items: center;

`;

const FormLabel = styled.label`
  display: block;
`;

const Tooltip = styled.span`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  cursor: help;

  &:hover span {
    visibility: visible;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const BackLink = styled(Link)`
  color: midnightblue;
  margin-bottom: 1rem;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  registerData: RegisterData;
  setRegisterData: (data: RegisterData) => void;
  handleRegister: () => void;
  message: string | null;
}

const RegisterView: React.FC<Props> = ({
  registerData,
  setRegisterData,
  handleRegister,
  message
}) => (
  <RegisterForm>
    <BackLink href="/">Go Back</BackLink>
    
    <Title>Register a new account</Title>
    <FormLabel>
      <Text>First Name:</Text>
      <Input
        type="text"
        value={registerData.name}
        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
      />
    </FormLabel>
    <FormLabel>
      <Text>Surname:</Text>
      <Input
        type="text"
        value={registerData.surname}
        onChange={(e) => setRegisterData({ ...registerData, surname: e.target.value })}
      />
    </FormLabel>
    <FormLabel>
      <Text>Personal Number:</Text>
      <Input
        type="text"
        value={registerData.pnr}
        onChange={(e) => setRegisterData({ ...registerData, pnr: e.target.value })}
      />
      <Tooltip>
        ?
        <TooltipText>Format: yymmddXXXX</TooltipText>
      </Tooltip>
    </FormLabel>
    <FormLabel>
      <Text>Email:</Text>
      <Input
        type="email"
        value={registerData.email}
        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
      />
    </FormLabel>
    <FormLabel>
      <Text> Password:</Text>
      <Input
        type="password"
        value={registerData.password}
        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
      />
    </FormLabel>
    <FormLabel>
      <Text>Username:</Text>
      <Input
        type="text"
        value={registerData.username}
        onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
      />
    </FormLabel>
    <p></p>
    <Button onClick={handleRegister}>Register</Button>
    {message && <Text>{message}</Text>}
  </RegisterForm>
);

export default RegisterView;
