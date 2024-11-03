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

const SnacksBiscuits = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <section className="w-full flex justify-center items-center flex-col">
        <div className="w-[95%] py-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Snacks & Biscuits
          </h3>
        </div>
        <div id="biscuits" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Biscuits
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="dryfruits&nuts" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Dry fruits & nuts
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="chips" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Chips
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="cakes" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Cakes
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="popcorn" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Popcorn
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="indiansnacks" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Indian Snacks
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div id="indiansweets" className="w-[95%] py-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Indian Sweets
          </h3>
          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              breakpoints={{
                360: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
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
                    <Link
                      href={`/components/product/${product.productId}`}
                      className="flex justify-center items-center"
                      style={{
                        flexDirection: "column",
                        height: "400px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          height: "250px",
                        }}
                      >
                        <Image src={product.productImage} style={{}} />
                      </div>
                      <div>
                        <p>
                          {product.productName &&
                            `${product.productName
                              .split(" ")
                              .splice(0, 6)
                              .join(" ")}${
                              product.productName.split(" ").length > 15
                                ? "..."
                                : ""
                            }`}
                        </p>

                        <span>{product.rating}</span>
                        <h4>₹{product.price}</h4>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SnacksBiscuits;
