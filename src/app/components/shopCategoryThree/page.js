 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";
 
import spicesImg from "../../../../public/category/spices.jpeg"; 
import giftsImg from "../../../../public/category/gifts.jpeg"; 
import snacksImgg from "../../../../public/category/biscuit.png"; 
import soupImg from "../../../../public/category/soupsouse.jpeg"; 
import BeverageImg from "../../../../public/category/bevrages.png";  
import vegeImg from "../../../../public/category/fruitvege.png"; 
import ChocolatesImg from "../../../../public/category/choklates.jpeg"; 
import TeaCoffeImg from "../../../../public/category/teacoffe.png"; 
import cleaningPrdImg from "../../../../public/category/cleaningprd.jpeg";  
const ShopByCategoryThree = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
          <div className="round_container">
            <Link href="/pages/categoryPrd/milk">
              <Image
                src={spicesImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Pure Spices</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={giftsImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Gifts</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={snacksImgg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Snacs & Namkeens</p>
            </Link>
          </div>

    
          <div className="round_container">
            <Link href="/">
              <Image
                src={snacksImgg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Biscuit & Cake</p>
            </Link>
          </div>


          <div className="round_container">
          <Link href="/pages/categoryPrd/schoolcart">
              <Image
                src={soupImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Soup & Sasuage</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={BeverageImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Drink & Beverage</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={vegeImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Vegetables & Salads</p>
            </Link>
          </div>


          <div className="round_container">
          <Link href="/pages/categoryPrd/schoolcart">
              <Image
                src={ChocolatesImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Chocolates & Candies</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={TeaCoffeImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Tea & Coffe</p>
            </Link>
          </div>

          
          <div className="round_container">
            <Link href="/">
              <Image
                src={cleaningPrdImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cleaning Products</p>
            </Link>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default ShopByCategoryThree;
