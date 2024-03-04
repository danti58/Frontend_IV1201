import React from 'react';
import { RegisterData } from '@/app/api';
import Link from 'next/link';
import '../../styles/register.css';


interface Props {
  registerData: RegisterData;
  setRegisterData: (data: RegisterData) => void;
  handleRegister: () => void;
  message: string | null;
}

/**
 * Register view component
 * 
 * @param p - Register view component props
 * @returns - Register view component
 */
const RegisterView: React.FC<Props> = ({ registerData, setRegisterData, handleRegister, message }) => (
  <div className="register-form">
    <Link href="/">Go Back</Link>
    
    <h2>Register Form</h2>
    <label>
      First Name:
      <input
        className="bg-white text-black"
        type="text"
        value={registerData.name}
        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
      />
    </label>
    <label>
      Surname:
      <input
        className="bg-white text-black"
        type="text"
        value={registerData.surname}
        onChange={(e) => setRegisterData({ ...registerData, surname: e.target.value })}
      />
    </label>
    <label>
      Personal Number:
      <input
        className="bg-white text-black"
        type="text"
        value={registerData.pnr}
        onChange={(e) => setRegisterData({ ...registerData, pnr: e.target.value })}
      />
      <span className="tooltip">?
        <span className="tooltiptext">Format: yymmddXXXX </span>
      </span>
    </label>
    <label>
      Email:
      <input
        className="bg-white text-black"
        type="email"
        value={registerData.email}
        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
      />
    </label>
    <label>
      Password:
      <input
        className="bg-white text-black"
        type="password"
        value={registerData.password}
        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
      />
    </label>
    <label>
      Username:
      <input
        className="bg-white text-black"
        type="text"
        value={registerData.username}
        onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
      />
    </label>
    <button onClick={handleRegister}>Register</button>
    {message && <p>{message}</p>}
  </div>
);


export default RegisterView;
