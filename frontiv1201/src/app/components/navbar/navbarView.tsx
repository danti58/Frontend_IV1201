// components/NavbarView.tsx
import { UserState } from '@/app/redux/types';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

type NavbarViewProps = {
  loginDisplay: string | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
};

const NavbarView: React.FC<NavbarViewProps> = ({ loginDisplay, onLoginClick, onLogoutClick }) => {
  const { role_id } = useSelector((state: any) => state.auth.userState as UserState);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'midnightblue', color: 'white' }}>
      <span>Logo</span>
      <Link href="/">Home</Link>
      {role_id !== 0 && (
        <Link href={role_id === 1 ? "/adminApplicants" : "/competencies"}>
          {role_id === 1 ? "See Applicants" : "Competencies"}
        </Link>
      )}
      <div>
        {loginDisplay ? (
          <>
            <span>Logged in as {loginDisplay}</span>
            <button onClick={onLogoutClick}>[Logout]</button>
          </>
        ) : (
          <button onClick={onLoginClick}>[Login]</button>
        )}
      </div>
    </nav>
  );
};

export default NavbarView;
