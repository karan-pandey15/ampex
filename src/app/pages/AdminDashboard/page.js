"use client";
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaUsers, FaUserShield, FaClipboardCheck, FaCheckCircle, FaCommentAlt, FaUserCog } from 'react-icons/fa';
import { IoChevronBackCircle } from "react-icons/io5";

import Link from 'next/link';

import axios from "axios";

export default function AdminDashboard() {

  const [users, setUsers] = useState([]);
  const [riders, setRiders] = useState([]);
  const [rides, setRides] = useState([]);




  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [sidebarOpen]);


  // length logic start here 

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://api.marasimpex.com/api/userdatas");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  
  const fetchRiders = async () => {
    try {
      const response = await axios.get("https://api.marasimpex.com/api/ridersalldata");
      setRiders(response.data);
    } catch (error) {
      console.error("Error fetching riders:", error);
    }
  };


  
  const fetchRides = async () => {
    try {
      const response = await axios.get("https://api.marasimpex.com/api/completeridesdata");
      setRides(response.data); // completeridesdata
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  };

  
  
  useEffect(()=>{
    fetchUsers();
    fetchRiders();
    fetchRides();
  },[]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        ref={sidebarRef} 
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white shadow-lg w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 z-20`}
      >
        <div className="p-4 font-bold text-lg">
          Maras
        </div>
        <nav className="mt-4">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="/pages/Admin/UserData" className="flex items-center">
                <FaUsers className="mr-3" />
                <span>Total Users</span>
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="/pages/Admin/AttendedData" className="flex items-center">
                <FaClipboardCheck className="mr-3" />
                <span>Total Attended</span>
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="/pages/Admin/RidersData" className="flex items-center">
                <FaUserShield className="mr-3" />
                <span>Total Riders</span>
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="/pages/Admin/CompleteRides" className="flex items-center">
                <FaCheckCircle className="mr-3" />
                <span>Complete Rides</span>
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="#" className="flex items-center">
                <FaCommentAlt className="mr-3" />
                <span>User Feedback</span>
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="#" className="flex items-center">
                <FaUserCog className="mr-3" />
                <span>My Profile</span>
              </Link>
            </li>


            <li className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
              <Link href="/pages/AdminDashboard" className="flex items-center">
                <IoChevronBackCircle className="mr-3" />
                <span>Admin Dashboard</span>
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Top Nav */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md ">
          <div className="font-bold text-xl">Maras</div>
          <button className="md:hidden p-2" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Cards */}
        <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Link href="/pages/Admin/UserData">
            <div className="bg-blue-600 text-white p-4 rounded shadow flex items-center justify-between space-x-3 lg:h-24">
              <div>
                <h3 className="font-bold text-lg">Total Users</h3>
                <p className="text-xl mt-1">{users.length}</p>
              </div>
              <FaUsers size={24} />
            </div>
          </Link>
          <Link href="/pages/Admin/RidersData">
            <div className="bg-green-600 text-white p-4 rounded shadow flex items-center justify-between space-x-3 lg:h-24">
              <div>
                <h3 className="font-bold text-lg">Total Riders</h3>
                <p className="text-xl mt-1">{riders.length}</p>
              </div>
              <FaUserShield size={24} />
            </div>
          </Link>
          <Link href="/pages/Admin/AttendedData">
            <div className="bg-red-600 text-white p-4 rounded shadow flex items-center justify-between space-x-3 lg:h-24">
              <div>
                <h3 className="font-bold text-lg">Total Attended</h3>
                <p className="text-xl mt-1">{users.length}</p>
              </div>
              <FaClipboardCheck size={24} />
            </div>
          </Link>
          <Link href="/pages/Admin/CompleteRides">
            <div className="bg-blue-600 text-white p-4 rounded shadow flex items-center justify-between space-x-3 lg:h-24">
              <div>
                <h3 className="font-bold text-lg">Complete Rides</h3>
                <p className="text-xl mt-1">{rides.length}</p>
              </div>
              <FaCheckCircle size={24} />
            </div>
          </Link>
          <Link href="#">
            <div className="bg-green-600 text-white p-4 rounded shadow flex items-center justify-between space-x-3 lg:h-24">
              <div>
                <h3 className="font-bold text-lg">User Feedback</h3>
                <p className="text-xl mt-1">0</p>
              </div>
              <FaCommentAlt size={24} />
            </div>
          </Link>
          <Link href="#">
            <div className="bg-red-600 text-white p-4 rounded shadow flex items-center justify-between space-x-3 lg:h-24">
              <div>
                <h3 className="font-bold text-lg">My Profile</h3>
              </div>
              <FaUserCog size={24} />
            </div>
          </Link>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
    </div>
  );
}
