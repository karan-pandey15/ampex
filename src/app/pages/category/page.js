import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import TopNavbar from "@/app/components/topnavbar/page";
import Footer from "@/app/components/footer/page";

import MilkBreadimg from "../../../../public/marasImg/milk2.jpeg"; 
import helperImg from "../../../../public/marasImg/helper.jpg";
import cabImg from "../../../../public/marasImg/cabimg.png";
import schoolImg from "../../../../public/category/schoolimage.jpeg";  
import HealthyFoodImg from "../../../../public/category/healthyfood.jpeg";  
import pureDairyImg from "../../../../public/category/dairyprdimg.jpeg";  
import Grocery from "../../../../public/category/grocery.png";  
import computerImg from "../../../../public/category/computerImg.jpeg";  
import kidsLunchImg from "../../../../public/category/kidsLunch.jpeg";   
import driverImg from "../../../../public/category/driver.jpeg";  
import planTripImg from "../../../../public/category/planTripimgg.jpeg"; 

const Category = () => {
  return (
    <div>
      <TopNavbar />
      <section className="bg-white mt-5">
        {/* Grid configuration for different screen sizes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          
          {/* Category Items */}
          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/cab">
              <Image src={cabImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Cab Booking" />
              <p className="text-center mt-2">Cab Booking</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/driver">
              <Image src={driverImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Book a Driver" />
              <p className="text-center mt-2">Book a Driver</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/attendate">
              <Image src={helperImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Book an Attendant" />
              <p className="text-center mt-2">Book an Attendant</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/school">
              <Image src={schoolImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="School Collections" />
              <p className="text-center mt-2">School Collections</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/schoolLunch">
              <Image src={kidsLunchImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="School Lunch" />
              <p className="text-center mt-2">School Lunch</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/categoryProduct/healthyfood">
              <Image src={HealthyFoodImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Healthy Food" />
              <p className="text-center mt-2">Healthy Food</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/categoryProduct/dairyprd">
              <Image src={pureDairyImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Pure Dairy Product" />
              <p className="text-center mt-2">Pure Dairy Product</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/categoryProduct/grocery">
              <Image src={Grocery} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Grocery" />
              <p className="text-center mt-2">Grocery</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/categoryProduct/milk">
              <Image src={MilkBreadimg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Milk & Bread" />
              <p className="text-center mt-2">Milk & Bread</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/computerrent">
              <Image src={computerImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Computer on Rent" />
              <p className="text-center mt-2">Computer on Rent</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/pages/subCategory/plantrip">
              <Image src={planTripImg} className="rounded-full w-24 h-24 sm:w-32 sm:h-32" alt="Plan a Trip" />
              <p className="text-center mt-2">Plan a Trip</p>
            </Link>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Category;
