 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";

import LahangaImg from "../../../../public/category/lahangaimg.jpeg"; 
import BusinessImg from "../../../../public/category/suitImg.jpeg"; 
import fashionImg from "../../../../public/category/suitImg.jpeg"; 
import kidsFashionImg from "../../../../public/category/kidsfasImg.jpeg"; 
import cosmeticImg from "../../../../public/category/cosmeticimg.jpeg"; 
import BeautyPrdmenImg from "../../../../public/category/bodycare.jpeg"; 
import bathImg from "../../../../public/category/dailyPrd.jpeg"; 
import WatchesImg from "../../../../public/category/watches.jpeg"; 



import adultImg from "../../../../public/category/fashionadult.jpeg"; 




const ShopByCategoryFour = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
      

          <div className="round_container">
            <Link href="/">
              <Image
                src={LahangaImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Lahanga Try & Buy</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={BusinessImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Business Suit</p>
            </Link>
          </div>

     


          <div className="round_container">
            <Link href="/">
              <Image
                src={adultImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Fashion for Adult</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={kidsFashionImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Kids Fashion</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={cosmeticImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cosmetic</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={bathImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Bath & Body</p>
            </Link>
          </div>
 
          
          <div  className="round_container">
            <Link href="/">
              <Image
                src={BeautyPrdmenImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Beauty Products for Men</p>
            </Link>
          </div>
          
          
          <div className="round_container">
            <Link href="/">
              <Image
                src={WatchesImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Watches & Beauty Accessories</p>
            </Link>
          </div>
          

        </div>
      </section>
    </>
  );
};

export default ShopByCategoryFour;
