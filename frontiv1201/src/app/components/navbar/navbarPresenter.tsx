// components/NavbarPresenter.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NavbarView from './navbarView';

function NavbarPresenter() {
  const router = useRouter();
  const userState = useSelector((state: any) => state.auth.userState);

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  // Decide what to display in the Navbar based on userState
  const loginDisplay = userState.username
    ? `${userState.username} ${userState.role_id === 1 ? '[ADMIN]' : ''}`
    : null;

  return (
    <NavbarView
      loginDisplay={loginDisplay}
      onLoginClick={handleLoginRedirect}
    />
  );
};

export default NavbarPresenter;
