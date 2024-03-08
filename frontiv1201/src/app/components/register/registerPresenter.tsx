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
  const [message, setMessage] = React.useState<string | null>(null);
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
    setMessage('Register success');
    router.push('/login');
  }

  /**
   * Sends error message when register fails  and logs the error to the console.
   * 
   * @param error - Error message
   */
  function onRegisterFail(error: any) {
    //setMessage('Register failed');
      //console.error('Register failed:', error);
      switch (error.request.status) {
          case 0:
              setMessage('Server is down');
              break;
          case 400:
              switch (error.response.data.message) {
                  case 'All fields are required':
                      setMessage('All fields are required');
                      break;
                  case 'Username is already in use':
                      setMessage('Username is already in use');
                      break;
                  case 'Invalid personal number format':
                      setMessage('Invalid personal number format');
                      break;
                  case 'Invalid email format':
                      setMessage('Invalid email format');
                      break;
                  case 'Email is already in use':
                      setMessage('Email is already in use');
                      break;
                  default:
                      setMessage('Register failed 400');
              }
              break;
          case 500:
              setMessage('Can not connect to database');
              break;
          default:
              setMessage('Register failed');
              break;
      }
  }

  /**
   * Handles response from API call after successful registration.
   */
  const handleRegister = async () => {

    //check if personal number is valid, if not set message and return
    if (!/^\d{10}$/.test(registerData.pnr)) {
      setMessage('Invalid personal number');
      return;
    }


    try {
      // Update the role_id to 2 right before sending.
      const payload = { ...registerData, role_id: '2' };
      const response = await registerPerson(payload);
      onRegisterSuccess(response);
    } catch (error) {
      onRegisterFail(error);
    }
  };

  
  

  return <RegisterView registerData={registerData} setRegisterData={setRegisterData} handleRegister={handleRegister} message={message} />;
};

export default RegisterPresenter;
