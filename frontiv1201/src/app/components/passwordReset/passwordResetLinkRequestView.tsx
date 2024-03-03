// components/PasswordResetLinkRequestView.tsx
import React from 'react';

type PasswordResetLinkRequestViewProps = {
  email: string;
  message: string | null;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
};

const PasswordResetLinkRequestView: React.FC<PasswordResetLinkRequestViewProps> = ({ email, message, onEmailChange, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            className="bg-white text-black"
            type="email"
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            required
          />
        </label>
        <button type="submit">[Send Reset Link]</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default PasswordResetLinkRequestView;
