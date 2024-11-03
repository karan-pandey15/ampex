"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Categofystyle.css';

const ShopByCategory = () => {
  const router = useRouter();

  const handleImagePress = (path) => {
    router.push(path);
  };

  return (
    <div className="container">
      <h2 className="sectionTitle">Our Services</h2>
      <div className="row">
        <ImageContainer name="Attendant" imageSource="/images/attendedimg.jpg" onClick={() => handleImagePress('/pages/bookingscreen/attendedScreen')} />
        <ImageContainer name="Nurse" imageSource="/images/nurse.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/nurseScreen')} />
        <ImageContainer name="Physio therapist" imageSource="/images/physiio.png" onClick={() => handleImagePress('/pages/bookingscreen/physioScreen')} />
        <ImageContainer name="Event Crews" imageSource="/images/evnetcrieww.png" onClick={() => handleImagePress('/pages/bookingscreen/eventCrewsScreen')} />
      </div>

      <div className="row">
        <ImageContainer name="Skating Trainer" imageSource="/images/skating.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/skatingScreen')} />
        <ImageContainer name="Boxing Coach" imageSource="/images/boxing.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/boxingScreen')} />
        <ImageContainer name="Driving Teacher" imageSource="/images/driver.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/drivingTeacherScreen')} />
        <ImageContainer name="Tuition Teacher" imageSource="/images/tutionteacher.jpeg" onClick={() => handleImagePress('#')} />
      </div>

      <div className="row">
        <ImageContainer name="Gym Trainer" imageSource="/images/gym.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/GymScreen')} />
        <ImageContainer name="Driver" imageSource="/images/taxi.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/DriverScreen')} />
        <ImageContainer name="Dance Teacher" imageSource="/images/danceteacher.jpeg" onClick={() => handleImagePress('/pages/bookingscreen/DanceScreen')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
      </div>

      <h2 className="sectionTitle">Fresh Dairy Products</h2>
      <div className="row">
      <ImageContainer name="Milk & Bread" imageSource="/images/milkimgg.jpg" onClick={() => handleImagePress('/pages/categoryProduct/milk')} />
      <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
      </div>

      <h2 className="sectionTitle">Daily Grocery</h2>
      <div className="row">
        <ImageContainer name="Grocery" imageSource="/images/grceryimg.jpg" onClick={() => handleImagePress('/pages/categoryProduct/grocery')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
      </div>

      <h2 className="sectionTitle">Healthy Food</h2>
      <div className="row">
        <ImageContainer name="Kids School Lunch" imageSource="/images/kidstiffin.jpg" onClick={() => handleImagePress('/pages/subCategory/schoolLunch')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
        <ImageContainer name="Coming Soon" imageSource="/images/comingsoon.png" onClick={() => handleImagePress('#')} />
      </div>
    </div>
  );
};

const ImageContainer = ({ name, imageSource, onClick }) => (
  <div className="touchable" onClick={onClick}>
    <div className="imageWrapper">
      <div className="imageContainer">
        <Image src={imageSource} alt={name} width={120} height={120} className="image" />
      </div>
      <p className="text">{name}</p>
    </div>
  </div>
);

export default ShopByCategory;
