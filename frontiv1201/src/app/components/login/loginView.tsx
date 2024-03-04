import React from 'react';
import { LoginData } from '@/app/api';
import Link from 'next/link';

interface Props {
  loginData: LoginData;
  setLoginData: (loginData: LoginData) => void;
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void; // Updated to handle form event
  message:string | null;
}

/**
 * Login view component 
 * 
 * @param param0  - Login view component props
 * @returns - Login view component
 */
const LoginView: React.FC<Props> = ({ loginData, setLoginData, handleLogin, message }) => (
  <div>
    {/* Wrap inputs with a form tag and use onSubmit event */}
    <form onSubmit={handleLogin}>
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
        style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: '6px'}}
        type="submit" // Change to type submit for form submission
      >
        Login
      </button>
      {message && <p>{message}</p>}

      
      <Link href="/passwordResetLinkRequestPage">[Forgot Password]</Link>

    </form>
  </div>
);

export default LoginView;