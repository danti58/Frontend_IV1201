import React from 'react';
import { LoginData } from '@/app/api';

interface Props {
  loginData: LoginData;
  setLoginData: (loginData: LoginData) => void;
  handleLogin: () => void;
}

const LoginView: React.FC<Props> = ({ loginData, setLoginData, handleLogin }) => (
  <div>
    <label>
      Username:
      <input
        className="bg-white text-black"
        type="text"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
    </label>
    <label>
      Password:
      <input
        className="bg-white text-black"
        type="password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
    </label>
    <button
    style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: '6px'}  }
    onClick={handleLogin}>Login</button>
  </div>
);

export default LoginView;
