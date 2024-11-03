"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTrashAlt, FaEdit } from "react-icons/fa";
import {  FaUsers, FaUserShield, FaClipboardCheck, FaCheckCircle, FaCommentAlt, FaUserCog } from 'react-icons/fa';
import { IoChevronBackCircle } from "react-icons/io5";

import Link from "next/link";
import axios from "axios";

export default function CompleteRides() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rides, setRides] = useState([]);

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
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    fetchRides();
  }, []);

  const fetchRides = async () => {
    try {
      const response = await axios.get("https://api.marasimpex.com/api/completeridesdata");
      setRides(response.data); // completeridesdata
    } catch (error) {
      console.error("Error fetching rides:", error);
    }
  };

  const deleteRide = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this ride?");
    if (confirmed) {
      try {
        await axios.delete(`https://api.marasimpex.com/api/completeridesdata/${id}`);
        fetchRides(); // Refresh the ride list
      } catch (error) {
        console.error("Error deleting ride:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white shadow-lg w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 z-20`}
      >
        <div className="p-4 font-bold text-lg text-white">Maras Admin</div>
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
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Nav */}
        <div className="flex justify-between items-center bg-gray-900 p-4 shadow-md">
          <div className="font-bold text-xl text-white">Maras</div>
          <button className="md:hidden p-2 text-white" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Ride Data Table */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Pickup Location</th>
                <th className="py-3 px-6 text-left">Drop Location</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride) => (
                <tr key={ride._id} className="text-gray-700 border-t border-gray-200">
                  <td className="py-3 px-6">{ride.name}</td>
                  <td className="py-3 px-6">{ride.email}</td>
                  <td className="py-3 px-6">{ride.pickupLocation}</td>
                  <td className="py-3 px-6">{ride.dropLocation}</td>
                  <td className="py-3 px-6 flex justify-center space-x-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteRide(ride._id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
    </div>
  );
}
