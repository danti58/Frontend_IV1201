import React from 'react';
import { loginPerson, LoginData } from '@/app/api';
import LoginView from './loginView';
import { setAuthData } from '@/app/redux/actions';
import { useDispatch } from 'react-redux';


function LoginPresenter() {

  const dispatch = useDispatch();

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

  // Inside LoginPresenter component
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await loginPerson(loginData);
      handleApiData(response);
      onLoginSuccess(response);
    } catch (error) {
      onLoginFail(error);
    }
  };

  const handleApiData = (responseData: any) => {
    const token = responseData.token;
    const role_id = responseData.user.role_id;
    const username = responseData.user.username;
    dispatch(setAuthData(token, role_id, username));
  };

  return <LoginView loginData={loginData} setLoginData={setLoginData} handleLogin={handleLogin} />;
};

export default LoginPresenter;
