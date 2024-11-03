"use client";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import TopNavbar from "@/app/components/topnavbar/page";
import React from "react";
import Eggs from "../../../../../public/egg-meat-fish/set2_02.jpg";
import Meats from "../../../../../public/egg-meat-fish/set2_03.jpg";
import Fish from "../../../../../public/egg-meat-fish/set2_04.jpg";
import Image from "next/image";
import Link from "next/link";
import Banner from "../../../../../public/egg-meat-fish/ccMeat-final_PC_01.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { PopularNearYouProducts } from "@/app/components/popularnearyou/popularnearyou_products";
import "../shopbycategorypagesstyles.css";

const EggMeatFish = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <section className="w-full flex justify-center items-center flex-col">
        <div className="w-[90%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Eggs, Meat & Fish
          </h3>
          <div className="pt-5">
            <Image src={Banner} />
          </div>
        </div>
        <div className="w-[90%] pt-5">
          <div className="flex justify-evenly items-center flex-wrap">
            <Link
              href="#eggs"
              style={{ width: "250px" }}
              className="images_link"
            >
              <Image src={Eggs} />
            </Link>
            <Link
              href="#meats"
              style={{ width: "250px" }}
              className="images_link"
            >
              <Image src={Meats} />
            </Link>
            <Link
              href="#fish"
              style={{ width: "250px" }}
              className="images_link"
            >
              <Image src={Fish} />
            </Link>
          </div>
        </div>
        <div id="eggs" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Eggs
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
        <div id="meats" className="w-[95%] pt-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Meats
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
        <div id="fish" className="w-[95%] py-5">
          <h3
            className="text-2xl font-bold pb-1"
            style={{ borderBottom: "1px solid black" }}
          >
            Fish
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

export default EggMeatFish;
