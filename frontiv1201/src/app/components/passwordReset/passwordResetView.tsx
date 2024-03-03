import React, { useState } from 'react';

type PasswordResetViewProps = {
  onResetPassword: (token: string, newPassword: string) => void;
  message: string | null;
};

const PasswordResetView: React.FC<PasswordResetViewProps> = ({ onResetPassword, message }) => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword(token, newPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Reset Token:
          <input className="bg-white text-black" type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
        </label>
        <label>
          New Password:
          <input className="bg-white text-black" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </label>
        <button type="submit">[Reset Password]</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordResetView;
