"use client";

import { useState } from "react";
import Footer from "@/app/components/footer/page"; 
import TopNavbar from "@/app/components/topnavbar/page";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length > 5) {
      alert("You can upload a maximum of 5 images at a time.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await fetch("https://api.marasimpex.com/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created:", data);
        alert("Product added successfully");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImages([]);
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
        <TopNavbar />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Add a New Product</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="DAILY_PRD">DAILY PRODUCTS</option>
            <option value="MILK">MILK</option>
            <option value="BREAD">BREAD</option>
            <option value="GROCERY">GROCERY</option>
            <option value="BREAKFAST">BREAKFAST</option>
            <option value="HEALTHY_FOOD">HEALTHY FOOD</option>
            <option value="TEA">TEA</option>
            <option value="COFFE">COFFE</option>
            <option value="FRUITS">FRUITS</option>
            <option value="VEGETABLES">VEGETABLES</option>
            <option value="BEVERAGE">BEVERAGE</option>
            <option value="BODYCARE">BODYCARE</option>
            <option value="COSMETIC">COSMETIC</option>
            <option value="HEALTHCARE">HEALTHCARE</option>
            <option value="FASHION">FASHION</option>
            <option value="GIFTS">GIFTS</option>
          </select>
        </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Images:</label>
            <input
              type="file"
              multiple
              onChange={(e) => setImages(Array.from(e.target.files))}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
          >
            Create Product
          </button>
        </form>

        {/* <Link href="/">
          <span className="block text-center mt-4 text-red-600 font-semibold hover:text-red-700 cursor-pointer">
            View & Delete Product
          </span>
        </Link>
         */}
      </div>
      <Footer />
    </div>
  );
};

export default ProductForm;
