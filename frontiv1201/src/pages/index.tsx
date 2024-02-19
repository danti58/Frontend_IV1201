import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';

export default function Home() {
  const userState = useSelector((state: any) => state.auth.userState);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Welcome to the recruitment app!
      </h1>

      <p className="text-lg text-center">
        {userState.username ? `Welcome, ${userState.username}` : 'To access this app, please login or register.'}
      </p>


      {/* Use Link without <a> */}
      <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Log in</Link>

      <Link href="/competencies" className="bg-blue-500 text-white px-4 py-2 rounded">Competencies</Link>

      <span className="mt-4">Don't have an account? 
        <Link href="/register" className="text-blue-500">Register here</Link>
      </span>

      {!userState.username && (
        <Link href="/register">
          <p className="text-blue-500 underline cursor-pointer">Register here</p>
        </Link>
      )}

    </main>
  );
}
