// components/NavbarPresenter.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NavbarView from './navbarView';
import { setAuthData } from '@/app/redux/actions';

/**
 * Presenter component for the Navbar, handles the login and logout logic and passes the data to the view component.
 * 
 * @returns - Navbar view component
 */
function NavbarPresenter() {
  const router = useRouter();
  const userState = useSelector((state: any) => state.auth.userState);
  const dispatch = useDispatch();

  /**
   * Redirects the user to the login page when the login button is clicked.
   */
  const handleLoginRedirect = () => {
    router.push('/login');
    };
  /**
   * Logs the user out and clears the user information from the Redux store.
   */
  const handleLogout = () => {
    dispatch(setAuthData({ token: '', role_id: 0, username: '' }));
  };


  /**
   * Decide what to display in the Navbar based on userState
   */
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
