import Image from "next/image";
import React from "react";
import TataFoods from "../../../../public/featuredBrands/Tata_Foods_v1.jpg";
import Daawat from "../../../../public/featuredBrands/Daawat.jpg";
import SunfestFramlite from "../../../../public/featuredBrands/sunfeast-Farmlite.jpg";
import Nestle from "../../../../public/featuredBrands/Nestle-v1NEW.jpg";
import PG from "../../../../public/featuredBrands/PG_Range.jpg";
import HUL_HPC from "../../../../public/featuredBrands/HUL_HPC.jpg";
import Dove from "../../../../public/featuredBrands/dove.jpg";
import SOGood from "../../../../public/featuredBrands/So_good_.jpg";
import Milky_Mist from "../../../../public/featuredBrands/Milky_Mist.jpg";
import ITC__Aashirvaad from "../../../../public/featuredBrands/ITC__Aashirvaad.jpg";
import Organic_Tattva from "../../../../public/featuredBrands/Organic_Tattva.jpg";
import Tata_Beverages_v1 from "../../../../public/featuredBrands/Tata_Beverages_v1.jpg";
import Colgate from "../../../../public/featuredBrands/Colgate-1.jpg";
import reckit from "../../../../public/featuredBrands/reckit.jpg";
import Tresemme from "../../../../public/featuredBrands/Tresemme.jpg";
import Pampers from "../../../../public/featuredBrands/Pampers.jpg";
import Kwality_walls from "../../../../public/featuredBrands/Kwality_walls.jpg";
import Dlecta from "../../../../public/featuredBrands/Dlecta.jpg";
import Link from "next/link";
import "./featuredbrands.css";

const FeaturedBrands = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%]">
          <h2
            className="text-4xl font-bold text-center py-4"
            style={{ color: "#6AB812" }}
          >
            Featured Brands
          </h2>
          <div className="flex justify-center items-center flex-wrap py-5">
            <div>
              <Link href="#">
                <Image
                  src={TataFoods}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Daawat}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={SunfestFramlite}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Nestle}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={PG}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={HUL_HPC}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Dove}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={SOGood}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Milky_Mist}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={ITC__Aashirvaad}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Organic_Tattva}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Tata_Beverages_v1}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Colgate}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={reckit}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Tresemme}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Pampers}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Kwality_walls}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Dlecta}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedBrands;
