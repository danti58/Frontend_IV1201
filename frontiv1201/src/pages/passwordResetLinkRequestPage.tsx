// pages/login.tsx
import { requestPasswordResetLink } from '@/app/api';
import React from 'react';
import { useRouter } from 'next/router';

export default function PasswordResetLinkRequestPage() {
    const router = useRouter();
    const [message, setMessage] = React.useState<string | null>(null);
    const [email, setEmail] = React.useState<string>('');

    async function resetPasswordLinkRequest(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await requestPasswordResetLink(email);
            console.log('password reset token:', response.token);
            onResetPasswordLinkRequestSuccess();
        } catch (error) {
            console.warn('Failed to reset password', error);
            onResetPasswordLinkRequestFailure();
        }
    };

    const onResetPasswordLinkRequestSuccess = () => {
        setMessage('Password reset link sent successfully');
        // Navigate to the password reset page
        router.push('/passwordResetPage');
    }

    const onResetPasswordLinkRequestFailure = () => {
        setMessage('Failed to send password reset link');
    }

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    return (
        <div>
            <form onSubmit={resetPasswordLinkRequest}>
                <label>
                    Email:
                    <input className="bg-white text-black" type="email" value={email} onChange={onEmailChange} required />
                </label>
                <button type="submit">[Send Reset Link]</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
