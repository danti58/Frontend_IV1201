// pages/login.tsx
import React from 'react';
import LoginPresenter from '../app/components/login/loginPresenter';
import styles from '../styles/Home.module.css';

// Import your LoginComponent here

/**
 * Page component for the login page.
 * 
 * @returns - Login presenter component
 */
export default function Login() {
  return (
    <div>
      {/* You can include a LoginComponent here or the content directly */}
      <LoginPresenter />
    </div>
  );
}
