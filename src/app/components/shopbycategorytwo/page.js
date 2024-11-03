import Image from "next/image";
import React from "react";
import FruitsVegetables from "../../../../public/Fruits__vegetables.jpg";
import EggsMeatFish from "../../../../public/SF_SBC_Tiles_MOB_400x420_new_.jpg";
import RiceAttaDal from "../../../../public/Rice-Atta--Dal.jpg";
import OilMasalaSauces from "../../../../public/Oil_Masala__Sauces._QL30_.jpg";
import SnacksBiscuits from "../../../../public/Snacks__Biscuits_2.jpg";
import InstantFood from "../../../../public/Instant-Food_new.jpg";
import DairyBread from "../../../../public/Dairy__Bread._QL30_.jpg";
import ChocolatesIcecream from "../../../../public/SF_SBC_Tiles_MOB_400x420_new-copy_1.jpg";
import BreakfastFood from "../../../../public/Breakfast_Food_._QL30_.jpg";
import TeaCoffee from "../../../../public/Tea__coffee._QL30_.jpg";
import HealthNutrition from "../../../../public/Health__Nutrition.jpg"; 
import Link from "next/link";
import "./shopbycategory.css";

const ShopByCategoryTwo = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="w-[95%]">
          <h2
            className="text-4xl font-bold text-center py-4 italic"
            style={{ color: "#6AB812" }}
          >
             Fresh Vegetables
          </h2>
          <div className="flex justify-center items-center flex-wrap py-5">
            <div>
              <Link href="./pages/shop-by-category/fruits-vegetables">
                <Image
                  src={BreakfastFood}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/egg-meat-fish">
                <Image
                  src={DairyBread}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/rice-atta-dal">
                <Image
                  src={ChocolatesIcecream}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/oil-masala-sauces">
                <Image
                  src={SnacksBiscuits}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>

            <div>
              <Link href="./pages/shop-by-category/instant-food">
                <Image
                  src={InstantFood}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>

            <div>
              <Link href="./pages/shop-by-category/snacks-biscuits">
                <Image
                  src={SnacksBiscuits}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/dairy-bread">
                <Image
                  src={DairyBread}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <h2
              className="text-4xl font-bold text-center py-4 italic"
              style={{ color: "#6AB812" }}
            >
              Groceryies
            </h2>
          </div>
          <div className="flex justify-center items-center flex-wrap py-5">
            <div>
              <Link href="./pages/shop-by-category/snacks-biscuits">
                <Image
                  src={SnacksBiscuits}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/instant-food">
                <Image
                  src={InstantFood}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/dairy-bread">
                <Image
                  src={DairyBread}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/chocolates-icecreams">
                <Image
                  src={ChocolatesIcecream}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/breakfast-food">
                <Image
                  src={BreakfastFood}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/tea-coffee">
                <Image
                  src={TeaCoffee}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/health-nutrition">
                <Image
                  src={HealthNutrition}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
          </div>

          <h2
            className="text-4xl font-bold text-center py-4 italic"
            style={{ color: "#6AB812" }}
          >
            Pakaged Food
          </h2>
          <div className="flex justify-center items-center flex-wrap py-5">
            <div>
              <Link href="./pages/shop-by-category/fruits-vegetables">
                <Image
                  src={FruitsVegetables}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/egg-meat-fish">
                <Image
                  src={EggsMeatFish}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/rice-atta-dal">
                <Image
                  src={RiceAttaDal}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/oil-masala-sauces">
                <Image
                  src={OilMasalaSauces}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>

            <div>
              <Link href="./pages/shop-by-category/instant-food">
                <Image
                  src={InstantFood}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>

            <div>
              <Link href="./pages/shop-by-category/snacks-biscuits">
                <Image
                  src={SnacksBiscuits}
                  style={{ width: "200px", height: "200px" }}
                  className="shopbycategory_images"
                />
              </Link>
            </div>
            <div>
              <Link href="./pages/shop-by-category/dairy-bread">
                <Image
                  src={DairyBread}
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

export default ShopByCategoryTwo;
