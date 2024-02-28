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

/**
 * Presenter component for the register page, handles the register logic and passes the data to the view component.
 * 
 * @returns  - Register view component
 */
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

  /**
   * Redirects the user to the login page after successful registration.
   * 
   * @param response - Response from API
   */
  function onRegisterSuccess(response: any) {
    console.log('Register success:', response);
    router.push('/login');
  }

  /**
   * Sends error message when register fails  and logs the error to the console.
   * 
   * @param error - Error message
   */
  function onRegisterFail(error: any) {
    console.error('Register failed:', error);
  }

  /**
   * Handles response from API call after successful registration.
   */
  const handleRegister = async () => {
    try {
      // Update the role_id to 2 right before sending.
      const payload = { ...registerData, role_id: '2' };
      const response = await registerPerson(payload);
      onRegisterSuccess(response);
    } catch (error) {
      onRegisterFail(error);
    }
  };

  
  

  return <RegisterView registerData={registerData} setRegisterData={setRegisterData} handleRegister={handleRegister} />;
};

export default RegisterPresenter;
