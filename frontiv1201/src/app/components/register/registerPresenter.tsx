import React from 'react';
import { registerPerson } from '@/app/api';
import RegisterView from './registerView';

interface RegisterData {
  name: string;
  surname: string;
  pnr: string;
  email: string;
  password: string;
  role_id: string;
  username: string;
}

function RegisterPresenter () {
  const [registerData, setRegisterData] = React.useState<RegisterData>({
    name: '',
    surname: '',
    pnr: '',
    email: '',
    password: '',
    role_id: '',
    username: '',
  });

  function onRegisterSuccess(response: any) {
    console.log('Register success:', response);
  }
  
  function onRegisterFail(error: any) {
    console.error('Register failed:', error);
  }

  const handleRegister = async () => {
    try {
      const response = await registerPerson(registerData);
      onRegisterSuccess(response);
    } catch (error) {
      onRegisterFail(error);
    }
  };

  return <RegisterView registerData={registerData} setRegisterData={setRegisterData} handleRegister={handleRegister} />;
};

export default RegisterPresenter;
