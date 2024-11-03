import Image from "next/image";
import React from "react";
import FV from "../../../../public/FV_1500X300.jpg";

const Banner4 = () => {
  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div className="w-[90%] pb-5">
          <Image src={FV} />
        </div>
      </section>
    </>
  );
};

export default Banner4;
