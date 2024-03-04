// loginPresenter.tsx

import React from 'react';
import { loginPerson, LoginData, requestPasswordResetLink } from '@/app/api';
import LoginView from './loginView';
import { setAuthData } from '@/app/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

/**
 * Presenter component for the login page, handles the login logic and passes the data to the view component.
 */
function LoginPresenter() {

  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.userState);
  const [message, setMessage] = React.useState<string | null>(null);

  /**
   * State to store the login data from the form inputs.
   */
  const [loginData, setLoginData] = React.useState<LoginData>({
    username: '',
    password: '',
  });

  /**
   * Redirects the user to the home page after successful login and sets the user information in the Redux store.
   * 
   * @param response - Response from the API call after successful login
   */
  function onLoginSuccess(response: any) {
    // print response json:
    console.log('Login success:', response);
    setMessage('Login success');
    // Redirect to the home page after successful login
    const user = response.user;
    if (user.role_id === 1) {
      Router.push('/adminApplicants');
    } else {
      Router.push('/'); // will later be replaced with the user's dashboard
    }
  }


  /**
   * Shows a error message when the login fails and logs the error to the console.
   * 
   * @param error - Error message 
   */
  function onLoginFail(error: any) {
    console.error('Login failed:', error);
    setMessage('Login failed');
    }

    /**
     * Handles the login data from the API call and sends it to the Redux store after successful login.
     * 
     * @param event - Form submission event 
     * @returns - Promise with the login data
     */

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

  /**
   * Sends the user information to the Redux store after successful login
   * 
   * @param responseData - Data from the API call after successful login
   */
  const handleApiData = (responseData: any) => {
    const token = responseData.token;
    const username = responseData.user.username;
    const role_id = responseData.user.role_id;
    dispatch(setAuthData({ token, role_id, username }));
  };

  
  return <LoginView loginData={loginData} setLoginData={setLoginData} handleLogin={handleLogin} message={message} />;
};

export default LoginPresenter;