import React from 'react';
import { RegisterData } from '@/app/api';

interface Props {
  registerData: RegisterData;
  setRegisterData: (data: RegisterData) => void;
  handleRegister: () => void;
}

const RegisterView: React.FC<Props> = ({ registerData, setRegisterData, handleRegister }) => (
  <div>
    {/* Example for one input, replicate for others */}
    <label>
      Name:
      <input
        className="bg-white text-black"
        type="text"
        value={registerData.name}
        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
      />
    </label>
    {/* Add other fields for surname, pnr, email, password, role_id, and username */}
    <button onClick={handleRegister}>Register</button>
  </div>
);

export default RegisterView;
