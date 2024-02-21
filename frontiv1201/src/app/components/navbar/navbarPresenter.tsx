// components/NavbarPresenter.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NavbarView from './navbarView';
import { setAuthData } from '@/app/redux/actions';

function NavbarPresenter() {
  const router = useRouter();
  const userState = useSelector((state: any) => state.auth.userState);
  const dispatch = useDispatch();
  
  const handleLoginRedirect = () => {
    router.push('/login');
  };
  const handleLogout = () => {
    dispatch(setAuthData({ token: '', role_id: 0, username: '' }));
  };


  // Decide what to display in the Navbar based on userState
  const loginDisplay = userState.username
    ? `${userState.username} ${userState.role_id === 1 ? '[ADMIN]' : ''}`
    : null;

  return (
    <NavbarView
      loginDisplay={loginDisplay}
      onLoginClick={handleLoginRedirect}
      onLogoutClick={handleLogout}
    />
  );
};

export default NavbarPresenter;
