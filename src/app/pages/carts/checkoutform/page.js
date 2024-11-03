 
"use client";
import React, { useState } from "react";

const CheckoutForm = ({ cart = [], totalPrice = 0, onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    phoneNumber: "",
    companyName: "",
    vatNumber: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="Bonnie Green"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="India"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="San Francisco"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              placeholder="+1 123-456-7890"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="Flowbite LLC"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                VAT number
              </label>
              <input
                type="text"
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="DE42313253"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Order summary</h2>
          <div className="space-y-2">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between text-sm font-medium text-gray-700"
                >
                  <span>
                    {item.productName} (x{item.quantity})
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          One or more items in your cart require an account.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-500">
            Sign in or create an account now.
          </a>
        </p>
      </div>
    </div>
  );
};

export default CheckoutForm;
