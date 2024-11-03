import Image from "next/image";
import React from "react";
import banner from "../../../../public/Get300_PC.jpg";

const Banner3 = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-4">
        <div className="w-[90%]">
          <Image src={banner} />
        </div>
      </section>
    </>
  );
};

export default Banner3;
