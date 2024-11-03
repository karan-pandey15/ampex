"use client";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import TopNavbar from "@/app/components/topnavbar/page";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";
import "../shopbycategorypagesstyles.css";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Dummy data for products
const products = [
  {
    id: 1,
    title: "Stylish Bag",
    price: 49.99,
    imageUrl: "https://i5.walmartimages.com/asr/1b738a39-6610-4fb6-b44b-7ade64dad070.382eb6fe2592d93b91bb94afaf587a34.jpeg",
    rating: 4.5
  },
 
  {
    id: 2,
    title: "Classic Bag",
    price: 69.99,
    imageUrl: "https://i5.walmartimages.com/asr/1b738a39-6610-4fb6-b44b-7ade64dad070.382eb6fe2592d93b91bb94afaf587a34.jpeg",
    rating: 4.0
  },
  {
    id: 1,
    title: "Stylish Bag",
    price: 49.99,
    imageUrl: "https://i5.walmartimages.com/asr/1b738a39-6610-4fb6-b44b-7ade64dad070.382eb6fe2592d93b91bb94afaf587a34.jpeg",
    rating: 4.5
  },
 
  {
    id: 2,
    title: "Classic Bag",
    price: 69.99,
    imageUrl: "https://i5.walmartimages.com/asr/1b738a39-6610-4fb6-b44b-7ade64dad070.382eb6fe2592d93b91bb94afaf587a34.jpeg",
    rating: 4.0
  },  {
    id: 1,
    title: "Stylish Bag",
    price: 49.99,
    imageUrl: "https://i5.walmartimages.com/asr/1b738a39-6610-4fb6-b44b-7ade64dad070.382eb6fe2592d93b91bb94afaf587a34.jpeg",
    rating: 4.5
  },
 
  {
    id: 2,
    title: "Classic Bag",
    price: 69.99,
    imageUrl: "https://i5.walmartimages.com/asr/1b738a39-6610-4fb6-b44b-7ade64dad070.382eb6fe2592d93b91bb94afaf587a34.jpeg",
    rating: 4.0
  },
 
];

const Bags = () => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add({ ...product, quantity: 1 }));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
      </div>
    );
  };

  return (
    <>
      <TopNavbar />
      <Navbar />
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%] pt-8 pb-16">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Bags
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={200}
                  height={200}
                />
                <h4 className="text-lg font-semibold mt-4">{product.title}</h4>
                <p className="text-xl text-gray-700 mt-1">${product.price.toFixed(2)}</p>
                <div className="mt-2">{renderStars(product.rating)}</div>
                <button
                  onClick={() => handleAdd(product)}
                  style={{backgroundColor:'#EAB308'}}
                  className="mt-4 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bags;
