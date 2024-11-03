"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import io from "socket.io-client";
import classNames from "classnames";
import {   FiMenu } from 'react-icons/fi';
import Footer from "@/app/components/footer/page";

const socket = io("https://api.marasimpex.com");

const DashboardTwoPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rideAccepted, setRideAccepted] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [otp, setOtp] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  // Function to generate OTP
  const handleGenerateOtp = async () => {
    const response = await fetch("https://api.marasimpex.com/api/otp/generate-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) {
      setOtp(data.otp);
    } else {
      console.log("OTP not generated");
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      router.push("/pages/userSignin");
    } else if (storedUser) {
      setUser(storedUser);
      setLoading(false);
    } else {
      axios
        .get("https://api.marasimpex.com/api/auth/userdata", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch user data:", err);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.push("/pages/userSignin");
        });
    }

    const storedRideAccepted =
      JSON.parse(localStorage.getItem("rideAccepted")) || null;
    setRideAccepted(storedRideAccepted);

    if (storedRideAccepted) {
      handleGenerateOtp(); // Generate OTP if a ride was previously accepted
    }

    socket.on("rideAccepted", (rideDetails) => {
      setRideAccepted(rideDetails);
      localStorage.setItem("rideAccepted", JSON.stringify(rideDetails));
      handleGenerateOtp(); // Generate OTP when a new ride is accepted
    });

    return () => {
      socket.off("rideAccepted");
    };
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rideAccepted");
    router.push("/pages/userSignin");
  };

  const handleRequestRide = () => {
    if (user) {
      setShowRequestForm(true);
    }
  };

  const handleSubmitRequest = () => {
    if (user && pickupLocation && dropLocation) {
      socket.emit("rideRequest", {
        userId: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        pickupLocation,
        dropLocation,
        socketId: socket.id,
      });
      setShowRequestForm(false);
      setPickupLocation("");
      setDropLocation("");
    }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
        <p className="text-white text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <>
     <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Maras text */}
                <div className="text-xl font-bold">
                    Maras
                </div>
                

                {/* Right side: Menu icon for small screens */}
                <div
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="flex md:hidden items-center">
                    <FiMenu className="text-white text-2xl" />
                </div>
            </div>
        </nav>

      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={classNames(
            "fixed inset-y-0 left-0 bg-gray-800 text-white p-6 transition-transform transform md:relative md:translate-x-0 w-64",
            {
              "-translate-x-full": !isSidebarOpen,
            }
          )}
        >
          <div className="flex items-center justify-between md:hidden">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white focus:outline-none"
            >
              ✕
            </button>
          </div>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={classNames("w-full py-2 px-4 text-left", {
                "bg-gray-700": activeTab === "profile",
                "hover:bg-gray-700": activeTab !== "profile",
              })}
            >
              My Profile
            </button>
            <button
              onClick={() => setActiveTab("booking")}
              className={classNames("w-full py-2 px-4 text-left", {
                "bg-gray-700": activeTab === "booking",
                "hover:bg-gray-700": activeTab !== "booking",
              })}
            >
              My Booking
            </button>
            <button
              onClick={() => setActiveTab("totalBookings")}
              className={classNames("w-full py-2 px-4 text-left", {
                "bg-gray-700": activeTab === "totalBookings",
                "hover:bg-gray-700": activeTab !== "totalBookings",
              })}
            >
              Total Bookings
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 text-left bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Mobile Sidebar Toggle Button */}
        {/* <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}

          className="md:hidden bg-gray-800 text-white p-2 fixed top-4 left-4 z-50 rounded"
        >
          ☰
        </button>
         */}

        {/* Main Content */}
        <main className="flex-1 p-8 ml-0 md:ml-64 mt-16 md:mt-0">
          {activeTab === "profile" && (
            <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">My Profile</h2>
              {user ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-gray-800">
                        <strong className="font-semibold">Name:</strong>{" "}
                        {user.name}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-gray-800">
                        <strong className="font-semibold">Email:</strong>{" "}
                        {user.email}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-gray-800">
                        <strong className="font-semibold">Phone:</strong>{" "}
                        {user.phone}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-gray-800">
                        <strong className="font-semibold">Address:</strong>{" "}
                        {user.address}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-gray-800">
                        <strong className="font-semibold">City:</strong>{" "}
                        {user.city}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-gray-800">
                        <strong className="font-semibold">PIN:</strong>{" "}
                        {user.pin}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">No user data available.</p>
              )}
            </div>
          )}

          {activeTab === "booking" && (
            <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">My Booking</h2>
              {rideAccepted ? (
                <div className="p-4 bg-green-100 rounded-lg shadow-sm">
                  <p className="text-green-800">
                    <strong className="font-semibold">Driver Name:</strong>{" "}
                    {rideAccepted.driverName}
                  </p>

                  <p className="text-green-800">
                    <strong className="font-semibold">Driver Email:</strong>{" "}
                    {rideAccepted.riderEmail}
                  </p>
                  

                   
                  <p className="text-green-800">
                    <strong className="font-semibold">OTP:</strong> {otp}
                  </p>
                </div>
              ) : (
                <p className="text-gray-600">No booking details available.</p>
              )}
            </div>
          )}
          

          {activeTab === "totalBookings" && (
            <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Total Bookings</h2>
              <p className="text-gray-600">No total booking data available.</p>
            </div>
          )}

          {/* Request Ride Button and Form */}
          <div className="w-full max-w-3xl mx-auto mt-8">
            {!rideAccepted && (
              <div>
                <button
                  onClick={handleRequestRide}
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Request a Ride
                </button>
                {showRequestForm && (
                  <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Drop Location"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    />
                    <button
                      onClick={handleSubmitRequest}
                      className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
                    >
                      Submit Ride Request
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal */}
          {isModalVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-green-800 font-bold">OTP Sent!</p>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default DashboardTwoPage;
