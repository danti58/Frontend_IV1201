import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';

/**
 * Home page component
 * 
 * @returns - Home page component
 */
export default function Home() {

  /**
   * Get the user state from the Redux store to check if the user is logged in.
   */
  const userState = useSelector((state: any) => state.auth.userState);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Recruitment app Group 7
      </h1>

      <p className="text-lg text-center">
        {userState.username ? `Welcome, ${userState.username}` : 'To access this app, please login or register.'}
      </p>

      {!userState.username && (
        <Link href="/register">
          <p className="text-blue-500 underline cursor-pointer">Register here</p>
        </Link>
      )}

    </main>
  );
}