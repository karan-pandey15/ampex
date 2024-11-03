 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";

import ChoklatesImg from "../../../../public/category/choklates.jpeg"; 
import flighBookImg from "../../../../public/category/flightBookimg.jpeg"; 
import kitchenImg from "../../../../public/category/kitchenImg.jpeg"; 
import showlights from "../../../../public/category/wallLight.jpeg"; 
import bathImg from "../../../../public/category/bathFittingprd.jpeg"; 
import carImg from "../../../../public/category/carImg.jpeg"; 
import petFood from "../../../../public/category/petImg.jpeg";  
import potImg from "../../../../public/category/potImg.jpeg"; 


import hotelImg from "../../../../public/marasImg/hotelimg.png";

import planTripImg from "../../../../public/category/planTripImg.jpeg"; 





const ShopByCategoryFive = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container"> 
          <div className="round_container">
            <Link href="/">
              <Image
                src={hotelImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Hotel Booking</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={planTripImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Plan a Trip</p>
            </Link>
          </div>

     


          <div className="round_container">
            <Link href="/">
              <Image
                src={flighBookImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">FLight Booking</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={kitchenImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Kitchen Product</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={showlights}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Show Lights</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={bathImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Bath Fitting Products</p>
            </Link>
          </div>
 
          
          <div  className="round_container">
            <Link href="/">
              <Image
                src={carImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Car Accessories</p>
            </Link>
          </div>
          
          
          <div className="round_container">
            <Link href="/">
              <Image
                src={petFood}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Pet Food</p>
            </Link>
          </div>
          

             <div className="round_container">
            <Link href="/">
              <Image
                src={potImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Live Tree & Pot</p>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ShopByCategoryFive;
