import React from "react";
import { FaSortDown } from "react-icons/fa";
import "./banner1.css";

const Banner1 = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-5">
        <div className="w-[90%] bg-gray-200">
          <div
            className="bg-white w-[25%] p-2 delivery_div"
            style={{ border: "2px solid #77BC1F", borderRadius: "8px" }}
          >
            <div className="flex font-semibold" style={{ color: "#77BC1F" }}>
              <h4>Delivery</h4>
              <FaSortDown />
            </div>
            <p className="text-sm font-semibold">As fast as 4 hours</p>
            <p className="text-sm font-semibold">Login to check slots</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner1;
