import React, { useState } from 'react';
import { registerPerson } from '../api'; 

interface RegisterData {
  name: string;
  surname: string;
  pnr: string;
  email: string;
  password: string;
  role_id: string;
  username: string;
}

const RegisterComponent: React.FC = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    surname: '',
    pnr: '',
    email: '',
    password: '',
    role_id: '',
    username: '',
  });

  const handleRegister = async () => {
    try {
      const response = await registerPerson(registerData);
      console.log(response);
      // Handle success, e.g., store personId in state, redirect to a new page
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      {/* Your registration form inputs */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterComponent;