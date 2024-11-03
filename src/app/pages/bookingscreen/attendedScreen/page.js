"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AttendedScreen.css';
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';

// Sample Data for Kids and Parents
const GaruduianKidsData = [
  { id: '1', title: 'Dropping School, Tuition', price: '₹130 per trip', rating: 5.0, reviews: 19, description: 'Safe and reliable transportation for your child to and from school and tuition classes.', imageUrl: '/placeholder.png' },
  { id: '2', title: 'Shopping and Market Assistance', price: '₹180 per hour', rating: 4.7, reviews: 28, description: 'Assistance with grocery shopping and errands while keeping your child engaged and safe.', imageUrl: '/placeholder.png' },
  { id: '3', title: 'Travelling with Kids', price: '₹120 per trip', rating: 4.0, reviews: 95, description: 'Careful attention and fun activities during trips to keep your child entertained and comfortable.' },
  { id: '4', title: 'Night Shift Job Support for Kids', price: '₹200 per night', rating: 4.0, reviews: 95, description: 'Overnight child care and support for parents working night shifts, ensuring your child’s comfort and safety.' },
  { id: '5', title: 'Baby Sitter', price: '₹150 per hour', rating: 4.0, reviews: 95, description: 'Professional babysitting service that ensures your child is in safe hands.' },
];

const AttendedData = [
  { id: '1', title: 'For Hospital Visit', price: '₹130 per visit', rating: 5.0, reviews: 19, description: 'Assistance for hospital visits, ensuring comfort and support during medical appointments or check-ups.', imageUrl: '/placeholder.png' },
  { id: '2', title: 'For Shopping Assistance', price: '₹180 per hour', rating: 4.7, reviews: 28, description: 'Companion service for shopping, helping with errands while ensuring convenience and assistance throughout.', imageUrl: '/placeholder.png' },
  { id: '3', title: 'For Official Work', price: '₹120 per hour', rating: 4.0, reviews: 95, description: 'Professional support for official tasks or work meetings, providing companionship and logistical assistance.' },
  { id: '4', title: 'For Travelling with Parents', price: '₹120 per trip', rating: 4.0, reviews: 95, description: 'Travel assistance to ensure safe and enjoyable trips, offering help with navigation and comfort for parents.' },
  { id: '5', title: 'Baby Sitter', price: '₹150 per hour', rating: 4.0, reviews: 95, description: 'Experienced babysitting service to care for your child in a safe and nurturing environment.' },
];

// MenuItem Component
const MenuItem = ({ item, onAddPress }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <h2 className="title">{item.title}</h2>
        <p className="price">{item.price}</p>
        <div className="ratingContainer">
          <span className="rating">{item.rating} ⭐</span>
          <span className="reviews">({item.reviews})</span>
        </div>
        <p className="description">{item.description}</p>
      </div>
      <Image src={item.imageUrl || '/placeholder.png'} alt={item.title} width={80} height={80} className="image" />
      <button onClick={() => onAddPress(item)} className="addButton">ADD</button>
    </div>
  );
};

const AttendedScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [address, setAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAdd = async () => {
    const bookingDetails = {
      title: selectedItem.title,
      pickupAddress: address,
      dropAddress: dropAddress,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: selectedItem.price,
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });
      const data = await response.json();
      console.log('Booking Response:', data);
      setModalVisible(false);
      setAddress('');
      setDropAddress('');
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  return (
 <>
 <TopNavbar />
 <div className="container">
      <h1 className="text">Book Garuduian for Kids</h1>
      <div className="menu">
        {GaruduianKidsData.map((item) => (
          <MenuItem key={item.id} item={item} onAddPress={openModal} />
        ))}
      </div>

      <h1 className="text">Book Attended For Parents</h1>
      <div className="menu">
        {AttendedData.map((item) => (
          <MenuItem key={item.id} item={item} onAddPress={openModal} />
        ))}
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modalContent">
            <h2 className="modalTitle">Add Details for {selectedItem?.title}</h2>
            <input type="text" placeholder="Enter PickUp Address" value={address} onChange={(e) => setAddress(e.target.value)} className="input" />
            <input type="text" placeholder="Enter Drop Address" value={dropAddress} onChange={(e) => setDropAddress(e.target.value)} className="input" />

            <label className="label">Select Date:</label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} className="datePicker" />

            <label className="label">Select Time:</label>
            <DatePicker selected={time} onChange={(time) => setTime(time)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" className="datePicker" />

            <div className="modalButtons">
              <button onClick={() => setModalVisible(false)} className="cancelButton">Cancel</button>
              <button onClick={handleAdd} className="bookButton">Book</button>
            </div>
          </div>
        </div>
      )}
    </div>
 <Footer />
 </>
  );
};

export default AttendedScreen;
