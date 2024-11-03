import React from "react"; 
import TopNavbar from "../topnavbar/page";
import Footer from "../footer/page";

const Category = () => {
  return (
     <div>
        <TopNavbar />
        <section className="bg-white mt-5">
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        
        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/cab">
            <Image src={cabImg} className="rounded-full" alt="Cab Booking" />
            <p className="text-center mt-2">Cab Booking</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/driver">
            <Image src={driverImg} className="rounded-full" alt="Book a Driver" />
            <p className="text-center mt-2">Book a Driver</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/attendate">
            <Image src={helperImg} className="rounded-full" alt="Book an Attendant" />
            <p className="text-center mt-2">Book an Attendant</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/school">
            <Image src={schoolImg} className="rounded-full" alt="School Collections" />
            <p className="text-center mt-2">School Collections</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/schoolLunch">
            <Image src={kidsLunchImg} className="rounded-full" alt="School Lunch" />
            <p className="text-center mt-2">School Lunch</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/categoryProduct/healthyfood">
            <Image src={HealthyFoodImg} className="rounded-full" alt="Healthy Food" />
            <p className="text-center mt-2">Healthy Food</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/categoryProduct/dairyprd">
            <Image src={pureDairyImg} className="rounded-full" alt="Pure Dairy Product" />
            <p className="text-center mt-2">Pure Dairy Product</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/categoryProduct/grocery">
            <Image src={Grocery} className="rounded-full" alt="Grocery" />
            <p className="text-center mt-2">Grocery</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/categoryProduct/milk">
            <Image src={MilkBreadimg} className="rounded-full" alt="Milk & Bread" />
            <p className="text-center mt-2">Milk & Bread</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/computerrent">
            <Image src={computerImg} className="rounded-full" alt="Computer on Rent" />
            <p className="text-center mt-2">Computer on Rent</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pages/subCategory/plantrip">
            <Image src={planTripImg} className="rounded-full" alt="Plan a Trip" />
            <p className="text-center mt-2">Plan a Trip</p>
          </Link>
        </div>

      </div> */}
    </section>
        <Footer />
     </div>
  );
};

export default Category;
