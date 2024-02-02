import React, { useState } from 'react';
import { loginPerson } from '../api';

interface LoginData {
  username: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await loginPerson(loginData);
      console.log(response);
      // Handle success, e.g., store token in state, redirect to a new page
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;