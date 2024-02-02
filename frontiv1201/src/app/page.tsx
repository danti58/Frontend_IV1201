'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import Image from 'next/image';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent'; 

export default function Home() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false); // Close the register component when login is clicked
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterVisible(true);
    setIsLoginVisible(false); // Close the login component when register is clicked
  };

  const handleRegisterClose = () => {
    setIsRegisterVisible(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Welcome to the App!
      </h1>

      <p className="text-lg text-center mb-8">
        Please log in to access the full features of our application.
      </p>

      <button onClick={handleLoginClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Log in
      </button>

      <span className="mt-4">Don't have an account? <button onClick={handleRegisterClick} className="text-blue-500">Register here</button></span>

      {isLoginVisible && <LoginComponent onClose={handleLoginClose} />}
      {isRegisterVisible && <RegisterComponent onClose={handleRegisterClose} />}
    </main>
  );
}