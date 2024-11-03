import React from 'react';
import { FiHeart, FiMenu } from 'react-icons/fi';

const DashboardNavbar = () => {
    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Maras text */}
                <div className="text-xl font-bold">
                    Maras
                </div>

                {/* Right side: Icons and Sign-in text */}
                <div className="hidden md:flex items-center space-x-4"> 
                    <FiHeart className="text-white text-xl" />
                </div>

                {/* Right side: Menu icon for small screens */}
                <div className="flex md:hidden items-center">
                    <FiMenu className="text-white text-2xl" />
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
