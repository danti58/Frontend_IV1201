import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        Welcome to the App!
      </h1>

      <p className="text-lg text-center mb-8">
        Please log in to access the full features of our application.
      </p>

      {/* Use Link without <a> */}
      <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Log in</Link>

      <span className="mt-4">Don't have an account? 
        <Link href="/register" className="text-blue-500">Register here</Link>
      </span>
    </main>
  );
}
