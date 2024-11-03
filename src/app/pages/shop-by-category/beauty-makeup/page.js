"use client";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import TopNavbar from "@/app/components/topnavbar/page";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { PopularNearYouProducts } from "@/app/components/popularnearyou/popularnearyou_products";
import "../shopbycategorypagesstyles.css";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { add } from "@/Redux/Cartslice";
import { useDispatch } from "react-redux";

const BeautyMakeup = () => {
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
            Beauty & Makeup
          </h3>
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Face creams
          </h3>
          <div className="py-8 relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {PopularNearYouProducts.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <div
                      className="flex flex-col justify-between items-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        height: "400px",
                      }}
                    >
                      <div
                        className="mb-3 flex justify-center items-center"
                        style={{
                          height: "200px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          style={{ height: "100%", width: "auto" }}
                        />
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Link href={`/components/product/${product.productId}`}>
                          <p className="text-lg font-semibold">
                            {product.productName}
                          </p>
                        </Link>
                        <p className="text-gray-500">₹{product.price}</p>
                        {renderStars(product.rating)}
                        <button
                          onClick={() => handleAdd(product)}
                          className="bg-yellow-500 py-2 px-4 rounded-md mt-2 hover:bg-yellow-600 duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <style jsx global>{`
              /* Custom styles for navigation buttons */
              .swiper-button-next,
              .swiper-button-prev {
                color: #fff;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #000;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                color: #000;
                background: #fff;
                border: 1px solid #000;
              }
            `}</style>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Lip care
          </h3>
          <div className="py-8 relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {PopularNearYouProducts.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <div
                      className="flex flex-col justify-between items-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        height: "400px",
                      }}
                    >
                      <div
                        className="mb-3 flex justify-center items-center"
                        style={{
                          height: "200px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          style={{ height: "100%", width: "auto" }}
                        />
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Link href={`/components/product/${product.productId}`}>
                          <p className="text-lg font-semibold">
                            {product.productName}
                          </p>
                        </Link>
                        <p className="text-gray-500">₹{product.price}</p>
                        {renderStars(product.rating)}
                        <button
                          onClick={() => handleAdd(product)}
                          className="bg-yellow-500 py-2 px-4 rounded-md mt-2 hover:bg-yellow-600 duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <style jsx global>{`
              /* Custom styles for navigation buttons */
              .swiper-button-next,
              .swiper-button-prev {
                color: #fff;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #000;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                color: #000;
                background: #fff;
                border: 1px solid #000;
              }
            `}</style>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Sunscreens
          </h3>
          <div className="py-8 relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {PopularNearYouProducts.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <div
                      className="flex flex-col justify-between items-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        height: "400px",
                      }}
                    >
                      <div
                        className="mb-3 flex justify-center items-center"
                        style={{
                          height: "200px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          style={{ height: "100%", width: "auto" }}
                        />
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Link href={`/components/product/${product.productId}`}>
                          <p className="text-lg font-semibold">
                            {product.productName}
                          </p>
                        </Link>
                        <p className="text-gray-500">₹{product.price}</p>
                        {renderStars(product.rating)}
                        <button
                          onClick={() => handleAdd(product)}
                          className="bg-yellow-500 py-2 px-4 rounded-md mt-2 hover:bg-yellow-600 duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <style jsx global>{`
              /* Custom styles for navigation buttons */
              .swiper-button-next,
              .swiper-button-prev {
                color: #fff;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #000;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                color: #000;
                background: #fff;
                border: 1px solid #000;
              }
            `}</style>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Make-up Remover
          </h3>
          <div className="py-8 relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {PopularNearYouProducts.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <div
                      className="flex flex-col justify-between items-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        height: "400px",
                      }}
                    >
                      <div
                        className="mb-3 flex justify-center items-center"
                        style={{
                          height: "200px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          style={{ height: "100%", width: "auto" }}
                        />
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Link href={`/components/product/${product.productId}`}>
                          <p className="text-lg font-semibold">
                            {product.productName}
                          </p>
                        </Link>
                        <p className="text-gray-500">₹{product.price}</p>
                        {renderStars(product.rating)}
                        <button
                          onClick={() => handleAdd(product)}
                          className="bg-yellow-500 py-2 px-4 rounded-md mt-2 hover:bg-yellow-600 duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <style jsx global>{`
              /* Custom styles for navigation buttons */
              .swiper-button-next,
              .swiper-button-prev {
                color: #fff;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #000;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                color: #000;
                background: #fff;
                border: 1px solid #000;
              }
            `}</style>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Eye make-up
          </h3>
          <div className="py-8 relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {PopularNearYouProducts.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <div
                      className="flex flex-col justify-between items-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        height: "400px",
                      }}
                    >
                      <div
                        className="mb-3 flex justify-center items-center"
                        style={{
                          height: "200px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          style={{ height: "100%", width: "auto" }}
                        />
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Link href={`/components/product/${product.productId}`}>
                          <p className="text-lg font-semibold">
                            {product.productName}
                          </p>
                        </Link>
                        <p className="text-gray-500">₹{product.price}</p>
                        {renderStars(product.rating)}
                        <button
                          onClick={() => handleAdd(product)}
                          className="bg-yellow-500 py-2 px-4 rounded-md mt-2 hover:bg-yellow-600 duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <style jsx global>{`
              /* Custom styles for navigation buttons */
              .swiper-button-next,
              .swiper-button-prev {
                color: #fff;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #000;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                color: #000;
                background: #fff;
                border: 1px solid #000;
              }
            `}</style>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BeautyMakeup;
