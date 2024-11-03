"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardNavbar from '@/app/components/DashboardNavbar/page';
import Footer from '@/app/components/footer/page'; 

const Riderlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        try {
            const response = await axios.post('https://api.marasimpex.com/api/auth/login', { email, password });
            console.log('Login response:', response.data); // Log the response to check the token
            
            const { token } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('rideremail', email);
            
            router.push('/pages/RiderDashboard');
        } catch (err) {
            console.error('Login error:', err); // Log error details
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <>
        <DashboardNavbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 text-center">Rider Login</h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Did not have an account? 
                        <Link href="/pages/riderpagelogin" className="text-blue-500 hover:underline">
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

export default Riderlogin;
