"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import DashboardNavbar from '@/app/components/DashboardNavbar/page';
import Footer from '@/app/components/footer/page';
import Link from 'next/link';

const LoginTwoPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://api.marasimpex.com/api/auth/loginuser', { email, password });
            const { token } = response.data;
            // Store token in localStorage
            localStorage.setItem('token', token);
            router.push('/pages/UserDashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <>
        <DashboardNavbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 text-center">User Login</h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Did not have an account?{' '}
                        <Link href="/pages/UserRegister" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
                
                
            </div>
        </div>
        <Footer />
        </>
    );
};

export default LoginTwoPage;
