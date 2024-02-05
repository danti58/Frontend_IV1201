import React from 'react';
import { registerPerson } from '@/app/api';
import RegisterView from './registerView';
import { useRouter } from 'next/router';

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
  const router = useRouter();
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
    router.push('/login');
  }
  
  function onRegisterFail(error: any) {
    console.error('Register failed:', error);
  }

  const handleRegister = async () => {
    try {
      // Update the role_id to 1 right before sending.
      const payload = { ...registerData, role_id: '1' };
      const response = await registerPerson(payload);
      onRegisterSuccess(response);
    } catch (error) {
      onRegisterFail(error);
    }
  };

  
  

  return <RegisterView registerData={registerData} setRegisterData={setRegisterData} handleRegister={handleRegister} />;
};

export default RegisterPresenter;
