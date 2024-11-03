 
"use client";
import Footer from "@/app/components/footer/page";
import TopNavbar from "@/app/components/topnavbar/page";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinCode, setPinCode] = useState('');
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5005/api/users/usersdata");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handlePinCodeSearch = async () => {
    if (pinCode.length !== 6) {
      setSearchError('Please enter a valid 6-digit pin code.');
      return;
    }
    setSearchError(null);

    try {
      const response = await fetch(`http://localhost:5005/api/users/search?pinCode=${pinCode}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFilteredUsers(data);
    } catch (error) {
      setFilteredUsers([]);
      setSearchError('Sorry, our service is not in this city.');
    }
  };

  const handleChatClick = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20I%20would%20like%20to%20chat%20with%20you`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = (phoneNumber) => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <TopNavbar />
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="mb-4">
            <label htmlFor="pinCode" className="block text-lg font-semibold mb-2">Search by Pin Code</label>
            <div className="flex justify-center items-center">
              <input
                id="pinCode"
                type="text"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-lg w-1/2 md:w-1/3"
                maxLength={6}
                placeholder="Enter 6-digit pin code"
              />
              <button
                onClick={handlePinCodeSearch}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 shadow-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Search
              </button>
            </div>
            {searchError && <p className="text-red-500 mt-2">{searchError}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                  <p className="text-gray-700 mb-1">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Availability:</strong> {user.availability}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Qualification:</strong> {user.qualification}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Category:</strong> {user.category}
                  </p>
                  <p className="text-gray-700">
                    <strong>City:</strong> {user.city}
                  </p>
                  <div className="flex justify-around p-4">
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
                      onClick={() => handleCallClick(user.phone)}
                    >
                      <IoCall />
                    </button>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
                      onClick={() => handleChatClick(user.phone)}
                    >
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">No users found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UsersPage;
