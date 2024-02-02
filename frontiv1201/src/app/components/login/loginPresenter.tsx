import React from 'react';
import { loginPerson, LoginData } from '@/app/api';
import LoginView from './loginView';

function LoginPresenter() {
  const [loginData, setLoginData] = React.useState<LoginData>({
    username: '',
    password: '',
  });

  function onLoginSuccess(response: any) {
    // print response json:
    console.log('Login success:', response);
  }

    function onLoginFail(error: any) {
        console.error('Login failed:', error);
    }

  const handleLogin = async () => {
    try {
      const response = await loginPerson(loginData);
      onLoginSuccess(response);
    } catch (error) {
      onLoginFail(error);
    }
  };

  return <LoginView loginData={loginData} setLoginData={setLoginData} handleLogin={handleLogin} />;
};

export default LoginPresenter;
