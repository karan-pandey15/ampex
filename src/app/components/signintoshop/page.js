import React from "react";
import { FaShippingFast } from "react-icons/fa";
import "./signintoshop.css";
import Link from "next/link";

const SignInToShop = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-5">
        <div
          className="w-[90%] flex justify-evenly items-center signin_to_shop"
          style={{
            borderTop: "5px solid #4A9A31",
            borderBottom: "5px solid #4A9A31",
          }}
        >
          <div className="text-6xl">
            <FaShippingFast />
          </div>
          <div className="py-2 flex justify-center items-center flex-col">
            <h3 className="text-2xl font-bold">
              Get your groceries delivered as fast as today
            </h3>
            <Link
              href={"/pages/signin"}
              className="py-2 px-6 text-white rounded-md"
              style={{ backgroundColor: "#4A9A31" }}
            >
              Sign in to shop
            </Link>
          </div>
          <div className="text-6xl">
            <FaShippingFast />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInToShop;
