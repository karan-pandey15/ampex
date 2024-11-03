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

const RiceAttaDal = () => {
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
            Rice, Atta & Dal
          </h3>
        </div>
        <div id="atta&flours" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Atta & Flours
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
        <div id="rice" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Rice
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
        <div id="dal&othergrains" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Dal & Other Grains
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
        <div id="wholegrains" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Whole Grains
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
        <div id="Soya" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Soya
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
        <div id="Poha" className="w-[95%] py-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Poha
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

export default RiceAttaDal;
